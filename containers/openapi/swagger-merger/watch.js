const chokidar = require("chokidar");
const swagger_merger = require("swagger-merger");

const root_file = 'index.yml';
const merged_file = 'merged.yml';

chokidar.watch('.', { ignored: merged_file } ).on('all', (event, path) => {
  console.log( event, path );

  swagger_merger({ input: root_file, output: merged_file })
    .then(()=>{
      // TODO:vim modeを追加する処理
    })
    .catch( err => {
      console.log( err );
    });
});
