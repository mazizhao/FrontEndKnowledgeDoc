(function () {
    'use strict';

    // 常见的类型： 基础类型、高级类型 = 自定义类型
    // let three = tuple[3];
    // ts中的枚举，自带类型的对象，枚举的值，如果没有赋值，从0开始递增；反举，只能在我们值为数字的情况
    var USER_ROLE;
    (function (USER_ROLE) {
        USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
        USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
        USER_ROLE[USER_ROLE["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
    })(USER_ROLE || (USER_ROLE = {}));

})();
