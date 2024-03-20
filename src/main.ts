import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const TOKEN = 'NESTJS_TOKEN';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // package.json option (auto reload)
  // "start:dev": "nest start --watch", (기존)
  // "start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch", (auto reload option 추가)
  let documentBuilder = new DocumentBuilder()
  // documentBuilder는 XML로부터 Document를 얻을 수 있음
  // xml 입력 소스에서 xml을 파싱할 수 있는데 여기서 사용되는 입력 소스는 inputStreams, Files, URL, SAX inputSources가 있다고 함
  // nestjs에서 authorize 구현
    .setTitle('NESTJS 테스트 API')
    .setDescription('NESTJS 테스트 PROJECT API')
    .setVersion('1.0')
    .addCookieAuth(TOKEN); // cookie추가
  documentBuilder = documentBuilder.addBearerAuth({
    // authorize 구현하려면 addBearerAuth 추가해줌
    type:'http',
    scheme: 'bearer',
    bearerFormat: 'JWT'
  })
  const config = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api-docs', app, document);
  // swaggerModule에ㅐ setup 설정해줌
  // 이러면 swagger랑 연결됨

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3000);
}
bootstrap();
