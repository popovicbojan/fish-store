# Fish Store
Small fish store app, where users can order fish from different stores. Only admin of specific store can change the inventory of his store.


## Start app from console
Only prerequisite for running the app is Node.js 10+ version. 
In command window from folder catch-of-the-day run command: <br><b>npm start</b><br>and app will run on local host:3000.

## App
First page contains input form where users enter name of the store they want to visit. By default some random name is generated. By clicking visit store user is redirected to that store. 
<br>In main window there are three parts:

<li>Left part contains fish than can be bought in that store
<li>Middle part is users cart 
<li>Right part is inventory managed by store owner

Store owners can login by their Facebook account. If store doesn't have owner, first user that logins will be assigned as owner of the current store. <br>Store owners can create new store item, edit existing offer, or delete some items. 
For each store owner can load initial items for their store.
<br>Every created store is persisted in Firebase. 