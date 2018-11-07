angular.
module('libraryApp').
config(['$stateProvider', '$urlRouterProvider', "$translateProvider",
    function config($stateProvider, $urlRouterProvider, $translateProvider) {
        $urlRouterProvider.otherwise('/books');
        $stateProvider
            .state('books', {
                url: '/books',
                template: '<books-list></books-list>'
            })

            .state('library', {
                url: '/library',
                template: '<books-library></books-library>'
            })
            .state('books-detail', {
                url: '/books/:bookId',
                template: '<book-detail></book-detail>'
            })
            .state('chart', {
                url: '/barChart',
                template: '<bar-chart></bar-chart>'
            })
            .state('lang', {
                url: '/bookLang',
                template: '<book-lang></book-lang>'
            })
        var en_translations = {
            "Home": "Home",
            "myLibrary": "My Library",
            "bookCategories": "Book Categories",
            "bookLanguages": "Book Languages",
            "english": "English",
            "ukrainian": "Ukrainian",
            "search": "Search book",
            "author": "By author",
            "title": "By title",
            "noFound": "No one book found yet",
            "moreDetails": "Read More",
            "itemAuthor": "Author",
            "category": "Category",
            "add": "Add To Lib",
            "back": "Back",
            "buy": "Buy Book",
            "delete": "Delete",
            "noBooks": "No books in library",
            "booksList": "Book List"
        }

        var ua_translations = {
            //header
            "Home": "Головна",
            "myLibrary": "Моя бiблiотека",
            "bookCategories": "Книжки за категорiями",
            "bookLanguages": "Книжки за мовами",
            "english": "Англiйська",
            "ukrainian": "Украiнська",
            //books-list
            "search": "Пошук",
            "author": "За автором",
            "title": "За назвою",
            "noFound": "Жодна книга не знайдена",
            //book-item
            "moreDetails": "Бiльш детально",
            "itemAuthor": "Автор",
            "category": "Категорiя",
            //book-detail
            "add": "Додати",
            "back": "Назад",
            "buy": "Купити",
            "delete": "Видалити",
            //book-library
            "noBooks": "Бiблiотека порожня",
            "booksList": "Список книжок"
        }

        $translateProvider.translations('en', en_translations);

        $translateProvider.translations('ua', ua_translations);

        $translateProvider.preferredLanguage('en');

    }
]);