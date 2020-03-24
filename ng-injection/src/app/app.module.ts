import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductOneComponent } from "./product-one/product-one.component";
import { ProductService } from "./shared/product.service";
import { ProductTwoComponent } from "./product-two/product-two.component";
import { LoggerService } from "./shared/logger.service";
import { AnotherProductService } from "./shared/another-product.service";

@NgModule({
    declarations: [AppComponent, ProductOneComponent, ProductTwoComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [
        {
            provide: ProductService,
            // 工厂方法创建的是一个单例对象，只会在第一次需要注入时创建，之后所使用的的皆为同一实例
            useFactory: (logger: LoggerService, isDev, appConfig) => {
                // 模拟不同环境
                if (isDev) {
                    console.log(appConfig.isDev);
                    return new ProductService();
                } else {
                    return new AnotherProductService(logger);
                }
            },
            // 通过 deps 配合工厂函数，注入服务所依赖的其他服务
            deps: [LoggerService, "IS_DEV_ENV", "APP_CONFIG"]
        },
        // 依赖注入一个明确的值："IS_DEV_ENV":true
        {
            provide: "IS_DEV_ENV",
            useValue: true
        },
        // 依赖注入一个对象
        {
            provide: "APP_CONFIG",
            useValue: { isDev: false }
        },
        LoggerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
