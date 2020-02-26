BEGIN;

DROP TABLE IF EXISTS recipe cascade;

CREATE TABLE recipe (
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  description   VARCHAR(255) NOT NULL,
  img_url       TEXT
);

INSERT INTO recipe (name, description , img_url) VALUES
  ('DOUBLE STACKED CAKE',  '', 'https://cdn.shopify.com/s/files/1/0015/1185/0042/products/Double_Stacked_Cake3_1280x1280.jpg?v=1574435122');

COMMIT;