import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
// import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除bh-ui
const sass = require('gulp-sass')(require('sass'));
export const removeDist = () => {
  return delPath(`${pkgPath}/bh-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bh-ui/lib/src`))
    .pipe(dest(`${pkgPath}/bh-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);