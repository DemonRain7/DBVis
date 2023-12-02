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
            "#43bcd4",
            "#91c344",
            "#f28d00"
        ],
        "backgroundColor": "transparent",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#ffffff"
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
                "barBorderColor": "#ffffff"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ffffff"
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
                "borderColor": "#ffffff"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaa"
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false,
            "color": [
                "#43bcd4",
                "#91c344",
                "#f28d00"
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
                        "#eeeeee"
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
                        "#eeeeee"
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
                        "#eeeeee"
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
                        "#eeeeee"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666"
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
                "color": "#dd6b66",
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
                "color": "#eeeeee"
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
