# Word Counter

Word-Counter outputs the individual words of an uploaded text file, and how many times each individual word appears. The red numbers are prime-numbers.

### Approach taken

The app is built in vanilla javascript and tested with Jasmine.

### Instructions

Clone this repo:

`git clone git@github.com:mghlm/word-counter.git`

Cd into directory:

`cd word-counter`

Open app in default browser:

`open ./views/index.html`

Download a [book](http://www.loyalbooks.com/download/text/The-Prince-by-Niccolo-Machiavelli.txt) and upload it.

Run tests:

`open SpecRunner.html`

### Known issues

* Words with apostrophes such as `"don't"` is split into `"don"` and `"t"`
* File-upload function is not tested

### Screenshot

![alt](http://i.imgur.com/uxthD4y.png)
