let timer = setInterval(time, 1000);
function time() {
  clearInterval(timer)
  date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let min = date.getMinutes()
  let second = date.getSeconds()
  document.querySelector('.show-time').innerHTML = '当前时间：' + year + '年' + month + '月' + day + '日' + '-' + hours + '时' + min + '分' + second + '秒'
  timer = setInterval(time, 1000);
}

// 柱形图-就业行业
(function () {
  let barChart = echarts.init(document.querySelector('.bar .chart'))
  barChart.setOption({
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // 修改图标的大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      // 修改文本样式
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '12'
      },
      // 坐标轴样式
      axisLine: {
        show: false
      },
      // 坐标值刻度样式
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '12'
      },
      // 坐标轴样式
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      // 网格分割线的样式
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    },
    series: [{
      data: [200, 300, 300, 900, 1500, 1200, 600],
      type: 'bar',
      barWidth: '35%',
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  })
  // 让图表自适应
  window.addEventListener('resize', function () {
    barChart.resize()
  })
})();

// 柱形图-技能掌握
(function () {
  const myChart = echarts.init(document.querySelector('.bar2 .chart'))
  // 柱子的颜色
  let color = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8878f6"]
  let option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      // y轴左侧数据
      {
        // 不显示y轴线
        axisLine: {
          show: false
        },
        inverse: true,
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        type: 'category',
        data: ['HTML5', 'NODE', 'VUE', 'JavaScript', 'CSS3',]
      },
      // y轴右侧数据
      {
        // 不显示y轴线
        axisLine: {
          show: false
        },
        inverse: true,
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        },
        data: [702, 350, 610, 793, 664]
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [60, 40, 90, 80, 30],
        barWidth: 10,
        // 柱子之间的间距
        barCategoryGap: 50,
        yAxisIndex: 0,//类似于z-index
        itemStyle: {
          barBorderRadius: 20,
          // 柱子的颜色
          color: function (params) {
            return color[params.dataIndex]
          }
        },
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%'
        }
      },
      // 这个数据用作外边框用
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  }
  myChart.setOption(option)
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 折线图-人员变化
(function () {
  const yearData = [
    {
      year: '2020',
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 190, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2020',
      data: [
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ]
  const myChart = echarts.init(document.querySelector('.line .chart'))
  let option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,//显示边框
      borderColor: '#012f4a',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: yearData[0].data[0],
        smooth: true //让折线平滑显示
      },
      {
        name: '新增游客',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true
      },
    ]
  }
  myChart.setOption(option)
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })

  // 点击2020、2021替换不同的数据
  $(function () {
    $('.line h2 a').click(function () {
      option.series[0].data = yearData[$(this).index()].data[0];
      option.series[1].data = yearData[$(this).index()].data[1]
      // 重新渲染
      myChart.setOption(option)
    })
  })
})();

// 折线图-播放量
(function () {
  const myChart = echarts.init(document.querySelector('.line1 .chart'))
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12
      }
    },
    grid: {
      left: '10',
      right: '10',
      bottom: '10',
      top: '30',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        // 线条样式
        lineStyle: {
          color: '#0184d5',
          width: 2
        },
        // 填充区域样式
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(1, 132, 213, 0.4)' },
            { offset: 0.8, color: 'rgba(1, 132, 213, 0.1)' }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        smooth: true,
        // 拐点设置
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        // 拐点样式
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, 0.1)',
          borderWidth: 12
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '转发量',
        type: 'line',
        areaStyle: {
          // 渐变色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 216, 135, 0.4)' },
            { offset: 0.8, color: 'rgba(0, 216, 135, 0.1)' }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        smooth: true,
        // 拐点设置
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        // 拐点样式
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, 0.1)',
          borderWidth: 12
        },
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  })
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 饼形图-年龄分布
(function () {
  const myChart = echarts.init(document.querySelector('.pie .chart'))
  myChart.setOption({
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      width: '100%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12
      },
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 修改饼图大小，第一个值是內圆半径，第二个值是外圆半径
        radius: ['40%', '60%'],
        // 修改饼图的位置
        center: ['50%', '45%'],
        // 文本标签
        label: {
          show: false
        },
        // 标签引导线
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    ]
  })
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 饼形图-地区分布
(function () {
  const myChart = echarts.init(document.querySelector('.pie1 .chart'))
  myChart.setOption({
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //   left: 'center',
    //   bottom: 0,
    //   itemWidth: 10,
    //   itemHeight: 10,
    //   textStyle: {
    //     color: 'rgba(255, 255, 255, 0.5)',
    //     fontSize: 12
    //   }
    // },

    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['15%', '75%'],
        center: ['50%', '50%'],
        roseType: 'radius',//半径模式
        label: {
          fontSize: 10
        },
        labelLine: {
          length: 6,
          length2: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  })
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})();

// 地图
(function () {
  const myChart = echarts.init(document.querySelector('.map .chart'))
  let geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  let XAData = [
    [{ name: '贵阳' }, { name: '合肥', value: 100 }],
    [{ name: '贵阳' }, { name: '厦门', value: 100 }],
    [{ name: '贵阳' }, { name: '台州', value: 100 }],
    [{ name: '贵阳' }, { name: '南宁', value: 100 }],
    [{ name: '贵阳' }, { name: '拉萨', value: 100 }]
  ];

  let XNData = [
    [{ name: '贵阳' }, { name: '深圳', value: 100 }],
    [{ name: '贵阳' }, { name: '上海', value: 100 }],
    [{ name: '贵阳' }, { name: '保定', value: 100 }],
    [{ name: '贵阳' }, { name: '兰州', value: 100 }],
    [{ name: '贵阳' }, { name: '银川', value: 100 }]
  ];

  let YCData = [
    [{ name: '贵阳' }, { name: '丽水', value: 100 }],
    [{ name: '贵阳' }, { name: '乌鲁木齐', value: 100 }],
    [{ name: '贵阳' }, { name: '哈尔滨', value: 100 }],
    [{ name: '贵阳' }, { name: '西安', value: 100 }],
    [{ name: '贵阳' }, { name: '西宁', value: 100 }],
  ];

  let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  // 处理航线数据，航线的起点或终点的数据必须在geoCoordMap里面存在
  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  let color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
  let series = [];
  [XAData, XNData, YCData].forEach(function (item, i) {
    series.push({
      type: 'lines',
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: 'red',   //arrow箭头的颜色
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item)
    },
      {
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item)
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        data: item.map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
  });
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
        } else {
          return params.name;
        }
      }
    },
    geo: {
      map: 'china',
      zoom: 1.2,//地图放大缩小
      label: {
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      itemStyle: {
        areaColor: 'rgba(20, 41, 87, 0.6)',//地图省份背景颜色
        borderColor: '#195BB9',
        borderWidth: 1,
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: series
  };
  myChart.setOption(option)
  // 让图表自适应
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})()


