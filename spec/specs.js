describe('Places', function() {
  it("creates a new entry with the given properties", function() {
    var testPlaces = new Places("Portland", "A city in Oregon", "Portlandia");
    expect(testPlaces.cityLocation).to.equal("Portland");
    expect(testPlaces.notes).to.equal("A city in Oregon");
    expect(testPlaces.landmarks).to.equal("Portlandia");
  });
});
