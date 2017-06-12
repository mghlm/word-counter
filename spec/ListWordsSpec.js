describe('ListWords', function() {

  var listWords;

  beforeEach(function() {
    listWords = new ListWords();
  });

  describe('Text', function() {
    it('is wrapped in html for list-view', function() {
      var testArray = [["word", 3], ["another", 2]]
      expect(listWords.wrapWordsInHtml(testArray)).toEqual([ '<p> <b>"word"</b> occures <b>3</b> times  --> <b> prime </b>  </p>', '<p> <b>"another"</b> occures <b>2</b> times  --> <b> prime </b>  </p>' ]);
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
