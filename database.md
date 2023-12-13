# Tree Nodes Database Schema

To store all the nodes of the tree, we use a `nodes` table with the following schema:

```sql
CREATE TABLE `nodes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    `parent_node_id` INT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`parent_node_id`) REFERENCES `nodes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
);
```
To insert root node

```sql
INSERT INTO nodes (label, parent_node_id) VALUES ('RootNodeLabel', NULL);
```
To insert child node

```sql
INSERT INTO nodes (label, parent_node_id) VALUES ('RootNodeLabel', <PARENT_ID>);
```
To Fetch entire tree

```sql
WITH RECURSIVE TreeCTE AS (
  SELECT id, label, parent_node_id FROM nodes WHERE parent_node_id IS NULL
  UNION ALL
  SELECT n.id, n.label, n.parent_node_id FROM nodes n JOIN TreeCTE tc ON n.parent_node_id = tc.id
)
SELECT id, label, parent_node_id FROM TreeCTE;
```
