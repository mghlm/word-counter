describe('Wordlist', function() {

  var wordlist;

  beforeEach(function() {
    wordlist = new WordList();
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
