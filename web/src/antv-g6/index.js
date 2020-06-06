import G6 from '@antv/g6';

export const createMap = (id, data, width, height, colors, strokes) => {
  const graph = new G6.Graph({
    container: id,
    width,
    height,
    layout: {
      type: "force",
      nodeStrength: 30,
      collideStrength: 0.7,
      alphaDecay: 0.01,
      preventOverlap: true
    },
    modes: {
      default: ["drag-node"]
    },
    defaultNode: {
      size: [10, 10]
    }
  });

  // mapping
  const nodes = data.nodes;
  const nodeMap = new Map();
  const clusterMap = new Map();
  let clusterId = 0;
  nodes.forEach(node => {
    nodeMap.set(node.id, node);
    // cluster
    if (node.cluster && clusterMap.get(node.cluster) === undefined) {
      clusterMap.set(node.cluster, clusterId);
      clusterId++;
    }
    const cid = clusterMap.get(node.cluster);
    if (!node.style) node.style = {};
    node.style.fill = colors[cid % colors.length];
    node.style.stroke = strokes[cid % strokes.length];
  });

  // map the value to node size
  let maxNodeValue = -9999,
    minNodeValue = 9999;
  nodes.forEach(function (n) {
    if (maxNodeValue < n.value) maxNodeValue = n.value;
    if (minNodeValue > n.value) minNodeValue = n.value;
  });
  const nodeSizeRange = [10, 30];
  const nodeSizeDataRange = [minNodeValue, maxNodeValue];
  scaleNodeProp(nodes, "size", "value", nodeSizeDataRange, nodeSizeRange);

  nodes.forEach(function (node) {
    node.oriSize = node.size;
    node.oriLabel = node.label;
  });

  function refreshDragedNodePosition(e) {
    const model = e.item.get("model");
    model.fx = e.x;
    model.fy = e.y;
  }
  graph.on("node:dragstart", function (e) {
    graph.layout();
    refreshDragedNodePosition(e);
  });
  graph.on("node:drag", function (e) {
    refreshDragedNodePosition(e);
  });
  graph.on("node:dragend", function (e) {
    e.item.get("model").fx = null;
    e.item.get("model").fy = null;
  });
  graph.on("node:click", function (e) {
    const node = e.item;
    const states = node.getStates();
    let clicked = false;
    const model = node.getModel();
    let size = 200;
    let labelText = "NODE: " + model.id + "\n" + model.description;
    states.forEach(function (state) {
      if (state === "click") {
        clicked = true;
        size = model.oriSize;
        labelText = model.oriLabel;
      }
    });
    graph.setItemState(node, "click", !clicked);
    graph.updateItem(node, {
      size,
      label: labelText
    });
    graph.layout();
  });

  graph.data(data);
  graph.render();

  function scaleNodeProp(
    elements,
    propName,
    refPropName,
    dataRange,
    outRange
  ) {
    const outLength = outRange[1] - outRange[0];
    const dataLength = dataRange[1] - dataRange[0];
    elements.forEach(function (n) {
      if (propName.split(".")[0] === "style") {
        if (n.style) {
          n.style[propName.split(".")[1]] =
            ((n[refPropName] - dataRange[0]) * outLength) / dataLength +
            outRange[0];
        } else {
          n.style = _defineProperty({},
            propName.split(".")[1],
            ((n[refPropName] - dataRange[0]) * outLength) / dataLength +
            outRange[0]
          );
        }
      } else {
        n[propName] =
          ((n[refPropName] - dataRange[0]) * outLength) / dataLength +
          outRange[0];
      }
    });
  }

};
export const createTestMap = (id,data,width, height)=>{
const graph = new G6.Graph({
  container:id,
  width:width,
  height:height,
  fitView: true,
  fitViewPadding: [20, 40, 50, 20],
  animate:true,
  defaultNode:{
    size:30,
    style:{
      fill:'steelbule',//填充色
      stroke:'#666',//描边色
      lineWidth:1//描边粗细
    },
    //*节点上标签文本样式
    labelCfg:{
      style:{
        fill:"#fff"//字体颜色
      }
    }
  },
  defaultEdge:{
    style:{
      opacity:0.6,
      stroke:'grey'
    },
    labelCfg:{
      autoRotate: true, // 边上的标签文本根据边的方向旋转
    }
  }
});
const nodes = data.nodes;
nodes.forEach(node => {
  if (!node.style) {
    node.style = {};
  }
  switch (
    node.class // 根据节点数据中的 class 属性配置图形
  ) {
    case 'c0': {
      node.type = 'circle'; // class = 'c0' 时节点图形为 circle
      break;
    }
    case 'c1': {
      node.type = 'rect'; // class = 'c1' 时节点图形为 rect
      node.size = [35, 20]; // class = 'c1' 时节点大小
      break;
    }
    case 'c2': {
      node.type = 'ellipse'; // class = 'c2' 时节点图形为 ellipse
      node.size = [35, 20]; // class = 'c2' 时节点大小
      break;
    }
  }
});
graph.data(data);
graph.render();
}
