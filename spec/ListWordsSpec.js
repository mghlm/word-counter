describe('ListWords', function() {

  var listWords;

  beforeEach(function() {
    listWords = new ListWords();
  });

  describe('Text', function() {
    it('is wrapped in html for list-view', function() {
      var testArray = [["word", 3], ["another", 2]]
      expect(listWords.wrapWordsInHtml(testArray)).toEqual([ '<p> <b id="word">word</b> occures <b id="prime-number">3</b> times </p>', '<p> <b id="word">another</b> occures <b id="prime-number">2</b> times </p>' ]);
    });
  });

  describe('Number', function() {
    it('returns true if passed number is a prime, otherwise it returns false', function() {
      expect(listWords.isPrimeNumber(1)).toBeFalsy();
      expect(listWords.isPrimeNumber(2)).toBeTruthy();
      expect(listWords.isPrimeNumber(3)).toBeTruthy();
      expect(listWords.isPrimeNumber(4)).toBeFalsy();
    });
  });
});
