import {expect} from "chai";
import {ParseService} from "../../../../src";
import {Done, inject} from "../../../../src/testing";

describe("ParseService :", () => {
  it("should clone object", () => {
    const source = {};

    expect(ParseService.clone(source)).not.to.be.equal(source);
  });

  it(
    "should not clone object",
    inject([ParseService, Done], (parserService: ParseService, done: Function) => {
      const source = {test: {}};

      expect(parserService.eval(undefined!, source, false)).to.equal(source);
      expect(parserService.eval("test", source, false)).to.equal(source.test);

      done();
    })
  );

  it(
    "should eval expression with a scope and return value",
    inject([ParseService, Done], (parserService: ParseService, done: Function) => {
      expect(
        parserService.eval(undefined!, {
          test: "yes"
        }).test
      ).to.equal("yes");

      expect(parserService.eval(undefined!, "test")).to.equal("test");

      done();
    })
  );

  it(
    "should eval expression with a scope and return value",
    inject([ParseService, Done], (parserService: ParseService, done: Function) => {
      expect(
        parserService.eval("test", {
          test: "yes"
        })
      ).to.equal("yes");

      done();
    })
  );

  it(
    "should eval expression with a scope and return value",
    inject([ParseService], (parserService: ParseService) => {
      expect(
        parserService.eval("test.foo", {
          test: "yes"
        })
      ).to.equal(undefined);
    })
  );

  it(
    "should eval expression with a scope and return a new object",
    inject([ParseService], (parserService: ParseService) => {
      const scope = {
        test: {
          foo: "yes"
        }
      };

      const value = parserService.eval("test", scope);

      expect(value.foo).to.equal("yes");

      value.foo = "test";

      expect(value.foo).to.not.equal(scope.test.foo); // New instance
    })
  );
});
