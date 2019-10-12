/*创建测试数据库*/
DROP TABLE IF EXISTS subject;
CREATE TABLE subject(
    sid integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    sname varchar(10) NOT NULL
);

INSERT INTO subject(sname) VALUES('语文');
INSERT INTO subject(sname) VALUES('数学');
INSERT INTO subject(sname) VALUES('英语');

SELECT * FROM subject;