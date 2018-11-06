angular.module('bookLang')
    .component('bookLang', {
        templateUrl: 'book-lang/book-lang.template.html',
        controller: ['libService', function BookLangController(libService) {
            this.$onInit = function () {
                libService.getBooksFromLib().then(item => {
                    return item.data;

                }).then(b => {
                    this.ru = this.getBooksByLanguage(b, 'ru');
                    console.log(this.ru);
                    this.en = this.getBooksByLanguage(b, 'en');
                    this.ua = this.getBooksByLanguage(b, 'uk');
                    this.other = b.length - (this.ru.length + this.en.length + this.ua.length)
                    console.log(this.other)
                }).then(b => {

                    this.options = {
                        chart: {
                            type: 'pieChart',
                            height: 400,
                            x: function (d) {
                                return d.key;
                            },
                            y: function (d) {
                                return d.y;
                            },
                            showLabels: true,
                            duration: 500,
                            labelThreshold: 0.01,
                            labelSunbeamLayout: true,
                            legend: {
                                margin: {
                                    top: 3,
                                    right: 35,
                                    bottom: 5,
                                    left: 0
                                }
                            }
                        }
                    };

                    this.data = [{
                            key: "Russian",
                            y: this.ru.length
                        },
                        {
                            key: "English",
                            y: this.en.length
                        },
                        {
                            key: "Ukrainian",
                            y: this.ua.length
                        },
                        {
                            key: "Other",
                            y: this.other
                        }

                    ];
                })
            }
            this.getBooksByLanguage = function (arr, lang) {
                return arr.filter(book => {
                    return book.language === lang;
                })
            }

        }]
    })