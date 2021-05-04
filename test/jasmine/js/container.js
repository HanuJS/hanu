describe("Container", function () {
  function id(id) {
    return document.getElementById(id);
  }

  function $rem(elem) {
    elem.element.parentNode.removeChild(elem.element);
  }

  function bapp(html) {
    $_(document.body).append(html);
  }

  it("should build a div tag string", function () {
    let container = new Hanu.components.Container();
    expect(container.html()).toMatch(/^<div/);
  });
});
