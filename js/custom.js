/*range slider js*/
$(function() {
    $("#range-slider")
    .slider({
        range: true,
        min: 0,
        max: 20,
        values: [1, 15],
        step: 1
    })
    .slider("float", {
        handle: true,
        pips: false,
        labels: false,
        prefix: "",
        suffix: "M"
    });
    $("#above-slider")
    .slider({
        min: 0,
        max: 20,
        values: [10],
        step: 1
    })
    .slider("float", {
        handle: true,
        pips: false,
        labels: false,
        prefix: "",
        suffix: "M"
    });
    $("#below-slider")
    .slider({
        min: 0,
        max: 20,
        values: [10],
        step: 1
    })
    .slider("float", {
        handle: true,
        pips: false,
        labels: false,
        prefix: "",
        suffix: "M"
    });
});
/*range slider js*/
/*slider js*/
$(function() {
   var print = function(msg) {
     alert(msg);
   };

   var setInvisible = function(elem) {
     elem.css('display', 'block');
   };
   var setVisible = function(elem) {
     elem.css('display', 'block');
   };

   var elem = $("#elem");
   var items = elem.children();

   // Inserting Buttons
   elem.prepend('<div class="left-right-btn" id="right-button"><a href="#"><img src="img/icon-left-arrow.svg"></a></div>');
   elem.append(' <div class="left-right-btn" id="left-button"><a href="#"><img src="img/icon-right-arrow.svg"></a></div>');

   // Inserting Inner
   items.wrapAll('<div id="inner" />');

   // Inserting Outer
   elem.find('#inner').wrap('<div id="outer"/>');

   var outer = $('#outer');

   var updateUI = function() {
     var maxWidth = outer.outerWidth(true);
     var actualWidth = 0;
     $.each($('#inner >'), function(i, item) {
       actualWidth += $(item).outerWidth(true);
     });

     if (actualWidth <= maxWidth) {
       setVisible($('#left-button'));
     }
   };
   updateUI();

   $('#right-button').click(function() {
     var leftPos = outer.scrollLeft();
     outer.animate({
       scrollLeft: leftPos - 200
     }, 800, function() {
       if ($('#outer').scrollLeft() <= 0) {
         setInvisible($('#right-button'));
       }
     });
   });

   $('#left-button').click(function() {
     setVisible($('#right-button'));
     var leftPos = outer.scrollLeft();
     outer.animate({
       scrollLeft: leftPos + 200
     }, 800);
   });

   $(window).resize(function() {
     updateUI();
   });
});

$('.select-graph li a').click(function () {
  $('.select-graph li').removeClass('active');
  $(this).parent().addClass('active');
});
/*slide js*/
/*pie chart js*/
if($('#pie-chart').length){
$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'pie-chart',
            type: 'pie',
            marginTop: 50,
            events: {
                load: function () {
                    var chart = this,
                        x = chart.plotLeft + (chart.series[0].center[0]),
                        y = chart.plotTop + (chart.series[0].center[1]),
                        box;

                    chart.pieCenter = chart.renderer.text('<div class="chart-txt"><h4>2326</h4>FPOs</div>', x, y, true)
                        .css({
                        'text-align': 'left',
                        color: 'black',
                        fontSize: '16px'
                    })
                        .add();

                    box = chart.pieCenter.getBBox();
                    chart.pieCenter.attr({
                        x: x - box.width / 2,
                        y: y - box.height / 4
                    });
                },
                redraw: function () {
                    var chart = this,
                        x = chart.plotLeft + (chart.series[0].center[0]),
                        y = chart.plotTop + (chart.series[0].center[1]),
                        box = chart.pieCenter.getBBox();
                    chart.pieCenter.attr({
                        x: x - box.width / 2,
                        y: y - box.height / 4
                    });
                }
            }
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
                 pointFormat: '{point.z} (<b>{point.percentage:.1f}%)</b>'
             },
          }
        },
        title: {
          text: null
        },
        tooltip: {
         enabled: false,
       },
        subtitle: {
          text: null
        },
        credits: {
          enabled: false
        },
        colors: ['#006699','#F8981D','#6EB43F'],
        legend: {
          align: 'center',
          verticalAlign: 'top',
          x: -10,
          y: -15,
          floating: true
        },
        series: [{
          showInLegend: true,
          data: [
            { name: 'Compliant', z: 1792, y: 77.8 },
            { name: 'Non - compliant', z: 449, y: 19.31 },
            { name: 'Unspecified', z: 84, y: 3.61 },
          ]
        }]
    });
});
}
/*pie chart js*/
/*high chart1 js*/
if($('#fpo_chart_type1').length){
var fpoChart1 = Highcharts.chart('fpo_chart_type1', {
  chart: {
    type: 'bar',
    marginTop: 60,
    height: 300
  },
  title: {
    text: null
  },
  subtitle: {
    text: null
  },
  colors: ['#f8981d'],
  xAxis: {
    categories: ['SFAC', 'NABARD', 'Non - SFAC', 'Non - SFAC_NRLM', 'Non - SFAC_MSAMB', 'Others'],
    title: {
      text: null
    }
  },
  yAxis: {
    opposite: true,
    min: 0,
    max: 15,
    tickInterval: 5,
    title: {
      text: null,
      align: 'high'
    },
    labels: {
      overflow: 'justify',
      format: '{value}K'
    }
  },
  tooltip: {
        //shared: true,
        //enabled: false
        xAxis: 0,
        backgroundColor: '#464646',
        borderWidth: 1,
        split: false,
        borderColor: '#464646',
        borderRadius: 8,
        style:{
          color: '#ffffff !important',
        }
    },
  plotOptions: {
  series: {
      dataLabels: {
        enabled: false
      },
      borderRadiusTopLeft: '50%',
      borderRadiusTopRight: '50%',
      states: {
        inactive: {
        opacity: 1
        },
        hover: {
          enabled: false,
        }
      }
    }
  },
  legend: {
  align: 'left',
    verticalAlign: 'top',
    x: -10,
    y: -15,
    floating: true
  },
  credits: {
    enabled: false
  },
  series: [{
    maxPointWidth: 15,
    name: "No. of new FPO's",
    data: [13, 10, 8, 5, 7, 10]
  }]
});
}
/*high chart1 js*/
/*high chart2 js*/
if($('#fpo_chart_type2').length){
var fpoChart2 = Highcharts.chart('fpo_chart_type2', {
    chart: {
        zoomType: 'xy',
        marginTop: 60,
        height: 300
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    colors: ['#f8981d', '#073949'],
    xAxis: [{
        categories: ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', '10', '11'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        min: 0,
   max: 15,
   tickInterval: 5,
        labels: {
            format: '{value}K'
        },
        title: {
            text: null,
        }
    }, { // Secondary yAxis
        title: {
            text: null,            
        },
        labels: {
        enabled: false,
        },
    }],
    tooltip: {
        //shared: true,
        //enabled: false
        xAxis: 0,
        backgroundColor: '#464646',
        borderWidth: 1,
        split: false,
        borderColor: '#464646',
        borderRadius: 8,
        style:{
          color: '#ffffff !important',
        }
    },
    credits: {
   enabled: false
 },
    legend: {
        align: 'left',
        x: -10,
        verticalAlign: 'top',
        y: 0,
        floating: true
    },
    plotOptions: {
  series: {
      dataLabels: {
        enabled: false,
      },
      borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
      states: {
        inactive: {
        opacity: 1
        },
        hover: {
          enabled: false,
        }
      }
    }
  },
    series: [{
        maxPointWidth: 15,
        name: 'No. of new FPOs',
        type: 'column',
        data: [5, 12, 11, 10, 9, 6, 8, 3, 8, 10, 8]

    }, {
        maxPointWidth: 15,
        name: 'No. of Farmers',
        type: 'spline',
        data: [3, 5, 2, 6, 8, 3, 4, 1, 3, 6, 4]
    }]
});
}
/*high chart2 js*/
/*high chart3 js*/
if($('#fpo_chart_type3').length){
var fpoChart3 = Highcharts.chart('fpo_chart_type3', {
  chart: {
    type: 'bar',
    marginTop: 60,
    height: (5 / 18 * 100) + '%',
  },
  title: {
    text: null
  },
  subtitle: {
    text: null
  },
  colors: ['#f8981d'],
  xAxis: {
    categories: ['Peapully Farmers Producer Company'],
    title: {
      text: null
    }
  },
  yAxis: {
    opposite: true,
    min: 0,
    max: 15,
    tickInterval: 5,
    title: {
      text: null,
      align: 'high'
    },
    labels: {
      overflow: 'justify',
      format: '{value}K'
    }
  },
  tooltip: {
        //shared: true,
        //enabled: false
        xAxis: 0,
        backgroundColor: '#464646',
        borderWidth: 1,
        split: false,
        borderColor: '#464646',
        borderRadius: 8,
        style:{
          color: '#ffffff !important',
        }
    },
  plotOptions: {
  series: {
      dataLabels: {
        enabled: false
      },
      borderRadiusTopLeft: '50%',
      borderRadiusTopRight: '50%',
      states: {
        inactive: {
        opacity: 1
        },
        hover: {
          enabled: false,
        }
      }
    }
  },
  legend: {
  align: 'left',
    verticalAlign: 'top',
    x: -10,
    y: -15,
    floating: true
  },
  credits: {
    enabled: false
  },
  series: [{
    maxPointWidth: 15,
    name: "No. of new FPO's",
    data: [13]
  }]
});
}
/*high chart3 js*/

/*high chart4 js*/
if($('#fpo_chart_type4').length){
  var fpoChart4 = Highcharts.chart('fpo_chart_type4', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda', 'Mancherial']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 30,
      tickInterval: 10,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [23, 18, 12, 7, 7, 7, 7, 7]
    }]
  });
}
/*high chart4 js*/
/*high chart5 js*/
if($('#fpo_chart_type5').length){
  var fpoChart5 = Highcharts.chart('fpo_chart_type5', {
    chart: {
      type: 'bar',
      marginTop: 60,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d','#B31B1B'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 12,
      tickInterval: 4,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'center',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPOs",
      data: [7, 6, 3.5, 2.5, 3, 2.5, 2.5]
    },{
      maxPointWidth: 15,
      name: "No. of FPOs shutdown",
      data: [0.5, 0.5, 2.5, 0.5, 2, 0.5, 2]
    }]
  });
}
/*high chart5 js*/
/*high chart6 js*/
if($('#fpo_chart_type6').length){
  var fpoChart6 = Highcharts.chart('fpo_chart_type6', {
    chart: {
      type: 'bar',
      marginTop: 60,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d','#B31B1B'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 12,
      tickInterval: 4,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'center',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of FPOs Active",
      data: [7, 6, 3.5, 2.5, 3, 2.5, 2.5]
    },{
      maxPointWidth: 15,
      name: "No. of New FPOs",
      data: [0.5, 0.5, 2.5, 0.5, 2, 0.5, 2]
    }]
  });
}
/*high chart6 js*/
/*high chart7 js*/
if($('#fpo_chart_type7').length){
  var fpoChart7 = Highcharts.chart('fpo_chart_type7', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (11 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 30,
      tickInterval: 10,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [23, 18, 12, 7, 7, 7, 7]
    }]
  });
}
/*high chart7 js*/
/*high chart8 js*/
if($('#fpo_chart_type8').length){
  var fpoChart8 = Highcharts.chart('fpo_chart_type8', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (11 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 30,
      tickInterval: 10,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [23, 18, 12, 7, 7, 7, 7]
    }]
  });
}
/*high chart8 js*/
/*high chart9 js*/
if($('#fpo_chart_type9').length){
  var fpoChart9 = Highcharts.chart('fpo_chart_type9', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda', 'Mancherial']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 3,
      tickInterval: 1,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        format: '{value}B'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [2.5, 1.75, 1.2, 0.75, 0.75, 0.75, 0.75, 0.75]
    }]
  });
}
/*high chart9 js*/
/*high chart10 js*/
if($('#fpo_chart_type10').length){
  var fpoChart10 = Highcharts.chart('fpo_chart_type10', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['SFAC', 'NABARD', 'Non - SFAC', 'Non - SFAC_NRLM', 'Non - SFAC_MSAMB', 'Others']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 3,
      tickInterval: 1,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        format: '{value}B'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [2.5, 1.75, 1.2, 0.75, 0.75, 0.75]
    }]
  });
}
/*high chart10 js*/
/*high chart11 js*/
if($('#fpo_chart_type11').length){
  var fpoChart11 = Highcharts.chart('fpo_chart_type11', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Adilabad', 'Hyderabad', 'Jagtial', 'Sangareddy', 'Nizamabad', 'Khammam', 'Nalgonda', 'Mancherial']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 30,
      tickInterval: 10,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        //format: '{value}K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [23, 18, 12, 7, 7, 7, 7, 7]
    }]
  });
}
/*high chart11 js*/
/*high chart12 js*/
if($('#fpo_chart_type12').length){
  var fpoChart12 = Highcharts.chart('fpo_chart_type12', {
    chart: {
      type: 'bar',
      marginTop: 10,
      height: (12 / 10 * 100) + '%'
    },
    title: {
      text: null
    },
    colors: ['#f8981d'],
    xAxis: {
      categories: ['Peapully Farmers Producer Company', 'Sri Ramanjaneya Farmer Producer Company limited', 'Meliaputti Tribal Farmer Services Producer...', 'Kotturu Tribal Farmers Services Producer...', 'Jirsong Agro Producer Company Limited', 'Ampri Orange Producer Company Limited', 'Merapni Agro Producer Company Limited']
    },
    yAxis: {
      opposite: true,
      min: 0,
      max: 1.5,
      tickInterval: 0.5,
      title: {
        text: null,
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        format: '{value} K'
      }
    },
    tooltip: {
      //shared: true,
      //enabled: false
      xAxis: 0,
      backgroundColor: '#464646',
      borderWidth: 1,
      split: false,
      borderColor: '#464646',
      borderRadius: 8,
      style:{
        color: '#ffffff !important',
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        },
        borderRadiusTopLeft: '50%',
        borderRadiusTopRight: '50%',
        states: {
          inactive: {
          opacity: 1
          },
          hover: {
            enabled: false,
          }
        }
      }
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: -10,
      y: -15,
      floating: true,
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      maxPointWidth: 15,
      name: "No. of new FPO's",
      data: [1.1, 0.8, 0.6, 0.3, 0.8, 0.6, 0.3]
    }]
  });
}
/*high chart12 js*/


/*hide show js*/
$(document).ready(function(){
    $(".map-tab").click(function(){
        $(".download-view,.table-view").hide();
        $(".camera-view,.map-view,.graps-view,.graph-popup").show();
        $(".map-tab,.table-tab").toggleClass("active");
    });
    $(".table-tab").click(function(){
        $(".download-view,.table-view").show();
        $(".camera-view,.map-view,.graps-view,.graph-popup").hide();
        $(".map-tab,.table-tab").toggleClass("active");
    });
});
/*hide show js*/
/*Expend graph modal js*/
$(function () {
  $(".expend-icon").click(function () {
    $(".expend-icon img,.graph-footer,.graph-slide").toggle();
    $(".graph-popup").toggleClass("expend-popup");
    if (typeof fpoChart1 != 'undefined') {
      fpoChart1.reflow();
    }
    if (typeof fpoChart2 != 'undefined') {
      fpoChart2.reflow();
    }
    if (typeof fpoChart3 != 'undefined') {
      fpoChart3.reflow();
    }
  })
});
/*Expend graph modal js*/
/*Expend graph modal js*/
$(function () {
  $(".other-metrics").click(function () {
    $(".graph-popup").toggleClass("other-metrics-hide");
  })
});
/*Expend graph modal js*/