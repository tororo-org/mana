// CHARTIST.JS

// 円グラフ
var data = {
  labels: ['Webデザイナー', 'Webデベロッパー', 'サーバーエンジニア', '営業職'],
  series: [14, 9, 8, 6]
};

var options = {
  width: '100%',
  height: '440px'
};

new Chartist.Pie('.chartSection__pieChart', data, options);



// 棒グラフ
var data = {
  labels: ['2018年', '2019年', '2020年'],
  series: [[10, 16, 29]]
};

var options = {
  width: '100%',
  height: '400px',
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function (value) {
      return value + " 人";
    },
  }
};

new Chartist.Bar('.chartSection__barChart', data, options);
