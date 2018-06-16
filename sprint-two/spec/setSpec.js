describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return size of set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    set.add('Danny a');
    set.add('Danny b');
    set.add('Danny c');
    set.add('Danny d');
    set.add('Danny Glover');
    set.add('Danny Glover');
    set.remove('Danny Glover');
    expect(set.size()).to.equal(5);
  });

  it('should return intersection of set', function() {
    var set1 = Set();
    var set2 = Set();
    set1.add('Susan Sarandon');
    set2.add('Danny Glover');
    expect(JSON.stringify(set1.intersection(set2))).to.equal(JSON.stringify([]));
    set1.add('Susan');
    set2.add('Susan');
    set1.add('Benny');
    set2.add('Benny');
    expect(JSON.stringify(set1.intersection(set2))).to.equal(JSON.stringify(["Susan", "Benny"]));
  });

    it('should return union of set', function() {
    var set1 = Set();
    var set2 = Set();
    set1.add('Susan Sarandon');
    set2.add('Danny Glover');
    expect(JSON.stringify(set1.union(set2))).to.equal(JSON.stringify(["Susan Sarandon", "Danny Glover"]));
    set1.add('Susan');
    set2.add('Susan');
    set1.add('Benny');
    set2.add('Benny');
    expect(JSON.stringify(set1.union(set2))).to.equal(JSON.stringify(["Susan Sarandon", "Susan", "Benny", "Danny Glover"]));
  });

});
