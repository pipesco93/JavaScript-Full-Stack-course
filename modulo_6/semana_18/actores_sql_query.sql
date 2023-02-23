INSERT INTO actors (id,created_at,first_name,last_name,rating,favorite_movie_id) VALUES (DEFAULT, NOW(),"Felipe","Escobar",8.8,3);

UPDATE actors 
SET first_name = "Rafael", last_name = "Gutierrez"
WHERE id =  52;

DELETE FROM actors WHERE id = 69 OR id = 68 OR id = 67 OR id = 66 OR id = 65 OR id = 64;

SELECT * FROM actors ORDER BY id ASC LIMIT 30 OFFSET 35