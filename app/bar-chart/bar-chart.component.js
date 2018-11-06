//var d3 = require('d3');
angular.module('barChart')
    .component('barChart', {
        templateUrl: 'bar-chart/bar-chart.template.html',
        controller: ['libService', '$window', function BarChartController(libService, $scope) {
            this.$onInit = function () {
                libService.getBooksFromLib().then(item => {
                    return item.data;

                }).then(b => {
                    this.science = this.categoryFilter(b, 'Science');
                    this.tech = this.categoryFilter(b, 'Technology');
                    this.bus = this.categoryFilter(b, 'Economics');
                    this.cook = this.categoryFilter(b, 'Cooking');
                    this.edu = this.categoryFilter(b, 'Education');
                    this.hstr = this.categoryFilter(b, 'History');
                    this.biogr = this.categoryFilter(b, 'Biography');
                    this.fict = this.categoryFilter(b, "Fiction");
                    this.rel = this.categoryFilter(b, "Religion");
                    this.comp = this.categoryFilter(b, "Computers");
                    this.math = this.categoryFilter(b, "Mathematics");
                    this.phil = this.categoryFilter(b, "Philosophy");
                    this.poetry = this.categoryFilter(b, "Poetry");
                    this.music = this.categoryFilter(b, "Music");
                    this.hob = this.categoryFilter(b, "Hobbies")
                    this.other = this.getOther(b);
                }).then(a => {
                    this.options = {
                        chart: {
                            type: 'discreteBarChart',
                            height: 450,
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 50,
                                left: 55
                            },
                            x: function (d) {
                                return d.label;
                            },
                            y: function (d) {
                                return d.value + (1e-10);
                            },
                            showValues: true,
                            valueFormat: function (d) {
                                return d3.format(',.0f')(d);
                            },
                            duration: 500,
                            xAxis: {
                                axisLabel: 'Categories'
                            },
                            yAxis: {
                                axisLabel: 'Quantity',
                                axisLabelDistance: -10
                            }
                        }
                    };

                    this.data = [{
                        key: "Cumulative Return",
                        values: [{
                                "label": "Science",
                                "value": this.science.length
                            },
                            {
                                "label": "Technologies",
                                "value": this.tech.length
                            },
                            {
                                "label": 'Economics',
                                "value": this.bus.length
                            },
                            {
                                "label": 'Cooking',
                                "value": this.cook.length
                            },
                            {
                                "label": 'Education',
                                "value": this.edu.length
                            },
                            {
                                "label": 'History',
                                "value": this.hstr.length
                            },
                            {
                                "label": 'Fiction',
                                "value": this.fict.length
                            },
                            {
                                "label": 'Biography',
                                "value": this.biogr.length
                            },
                            {
                                "label": "Mathematics",
                                "value": this.math.length
                            },
                            {
                                "label": "Religion",
                                "value": this.rel.length
                            },
                            {
                                "label": "Computers",
                                "value": this.comp.length
                            },
                            {
                                "label": "Philosophy",
                                "value": this.phil.length
                            },
                            {
                                "label": "Poetry",
                                "value": this.poetry.length
                            },
                            {
                                "label": "Music",
                                "value": this.music.length
                            },
                            {
                                "label": "Hobbies",
                                "value": this.hob.length
                            },
                            {
                                "label": "Other",
                                "value": this.other.length
                            }
                        ]
                    }]
                })
            }
            this.categoryFilter = function (arr, string) {
                return arr.filter(item => {
                    if (item.categories) {
                        return item.categories[0].includes(string)
                    }
                })
            }
            this.getOther = function (arr) {
                return arr.filter(item => {
                    return !item.categories
                })
            }



        }]
    })