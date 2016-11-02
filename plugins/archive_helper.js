module.exports = function (env, callback) {
    env.helpers.getArticles = function(contents, numberOfArticles) {
        var articles;
        articles = contents['articles']._.directories.map(function(item) {
            return item.index;
        });
        articles.sort(function(a, b) {
            return b.date - a.date;
        });
        if (numberOfArticles) {
            articles = articles.slice(0, numberOfArticles);
        }
        return articles;
    };
    callback();
}