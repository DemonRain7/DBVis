(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dark', {
        "color": [
            "#e53935",
            "#fb8c00",
            "#fdd835",
            "#00acc1",
            "#7e57c2",
            "#ec407a",
            "#00bcd4",
            "#8bc34a",
            "#ff5722",
            "#4e342e"
        ],
        "backgroundColor": "transparent",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#cccccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#fd1050",
                "color0": "#0cf49b",
                "borderColor": "#fd1050",
                "borderColor0": "#0cf49b",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#cccccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false,
            "color": [
                "#e53935",
                "#fb8c00",
                "#fdd835",
                "#00acc1",
                "#7e57c2",
                "#ec407a",
                "#00bcd4",
                "#8bc34a",
                "#ff5722",
                "#4e342e"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#ffffff"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#ffffff"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#ffffff"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#ffffff",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#ffffff",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#ffffff",
                "width": 1
            },
            "itemStyle": {
                "color": "#e53935",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#ffffff",
                "borderColor": "#ffffff",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#a9334c"
                },
                "controlStyle": {
                    "color": "#ffffff",
                    "borderColor": "#ffffff",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#ffffff"
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#ffffff"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
                }
            }
        }
    });
}));
