﻿<style>
    #productTable { width: auto; }
    #productTable td { max-width: 150px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
    #productTable td input { max-width: 125px; }
</style>

<div ng-controller="productCtrl">
    <table id="productTable" class="table table-striped table-bordered">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
        </tr>
        <tr ng-repeat="item in products" ng-hide="item.id == editedProduct.id">
            <td>{{item.name}}</td>
            <td class="description">{{item.description}}</td>
            <td>{{item.category}}</td>
            <td>{{item.price | currency}}</td>
            <td>
                <button ng-click="startEdit(item)" class="btn btn-xs btn-primary">
                    Edit
                </button>
                <button ng-click="deleteProduct(item)" class="btn btn-xs btn-primary">
                    Delete
                </button>
            </td>
        </tr>
        <tr ng-class="{danger: editedProduct}">
            <td><input ng-model="editedProduct.name" required /></td>
            <td><input ng-model="editedProduct.description" required /></td>
            <td><input ng-model="editedProduct.category" required /></td>
            <td><input ng-model="editedProduct.price" required /></td>
            <td>
                <button ng-hide="editedProduct.id"
                        ng-click="createProduct(editedProduct)"
                        class="btn btn-xs btn-primary">
                    Create
                </button>
                <button ng-show="editedProduct.id"
                        ng-click="updateProduct(editedProduct)"
                        class="btn btn-xs btn-primary">
                    Save
                </button>
                <button ng-show="editedProduct"
                        ng-click="cancelEdit()" class="btn btn-xs btn-primary">
                    Cancel
                </button>
            </td>
        </tr>
    </table>
</div>
