
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "contact_email" VARCHAR (1000) NOT NULL
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY	NOT NULL,
	"user_id" INT REFERENCES "user",
	"project_name" varchar(255),
	"finished_length_in" integer,
	"quantity" integer,
	"fringe_length_in" integer,
	"sampling_length_in" integer,
	"loom_waste_in" integer,
	"warp_takeup_percent" integer,
	"length_shrinkage_percent" integer,
	"finished_width_in" integer,
	"width_shrinkage_percent" integer,
	"sett" integer,
	"extra_ends" integer,
	"warp_yards_per_lb" integer,
	"warp_length_in" integer,
	"weaving_length_tension_in" integer,
	"weaving_length_relaxed_in" integer,
	"width_in_reed_in" integer,
	"warp_ends" integer,
	"warp_total_yds" integer,
	"warp_total_oz" integer,
	"ppi" integer,
	"weft_takeup_percent" integer,
	"weft_ypp" integer,
	"weft_total_yds" integer,
	"weft_total_oz" integer,
	"draft_diagram" INT REFERENCES "draft_diagram",
	"notes" varchar,
	"materials_id" INT REFERENCES "materials"
);

CREATE TABLE "photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" INT REFERENCES "project" NOT NULL,
	"location" varchar NOT NULL,
);
