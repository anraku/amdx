// generated by scripts/new-page.js
// @ts-ignore
import Doc, { frontmatter, toc } from "../docs/test-mathml.mdx";
import { ItemLayout } from "../components/ItemLayout";
import ssgConfig from "../mdxx-ssg.json";
import { AmpIncludeAmpMathml } from "../components/amp";

const newProps = { ...ssgConfig, ...frontmatter, toc } as any;

export const config = {
  amp: true,
};

export default () => (
  <>
    <AmpIncludeAmpMathml />
    <ItemLayout {...newProps}>
      <Doc amp />
    </ItemLayout>
  </>
);