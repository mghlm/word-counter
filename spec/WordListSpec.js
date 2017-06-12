describe('Wordlist', function() {

  var wordlist;

  beforeEach(function() {
    wordlist = new WordList();
  });

  describe('Text', function() {
    it('is wrapped in html for list-view', function() {
      var testArray = [["word", 3], ["another", 2]]
      expect(wordlist.printCountedWordsAsList(testArray)).toEqual(["<p> <b> word </b> occures 3 times </p>"]);
    });
  });

  describe('Number', function() {
    it('returns true if passed number is a prime, otherwise it returns false', function() {
      expect(wordlist.isPrimeNumber(1)).toBeFalsy();
      expect(wordlist.isPrimeNumber(2)).toBeTruthy();
      expect(wordlist.isPrimeNumber(3)).toBeTruthy();
      expect(wordlist.isPrimeNumber(4)).toBeFalsy();
    });
  });
});
