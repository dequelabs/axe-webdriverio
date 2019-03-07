declare module "axe-webdriverio" {
  import * as axe from "axe-webdriverjs";
  class AxeWebDriverIOBuilder extends axe.AxeBuilder {}
  export = AxeWebDriverIOBuilder;
}
