

function BSTNode(key,value){
  this.value = value;
  this.key = key;
  this.left = null;
  this.right = null;
}

function bsTree(){
  this.root = null;

}

bsTree.prototype.insert = function(key, value, node){
  if(node === undefined){
    node = this.root;
  }

  if(this.root === null){
    this.root = new BSTNode(key, value);
  }else if(key < node.key){
    if(node.left === null){
      node.left = new BSTNode(key, value);
    }else{
      this.insert(key, value, node.left);

    }
  }else{
    if(node.right === null){
      node.right = new BSTNode(key, value);
    }else{
      this.insert(key, value, node.right);

    }
  }

};
bsTree.prototype.find = function(key, node){
  if(node === undefined){
    node = this.root;
  }
  if(key === node.key){
    return node;
  }else if(key < node.key){
    if(node.left === null){
      return false;
    }else{
      return this.find(key, node.left);
    }
  }else{
    if(node.right === null){
      return false;
    }else{
      return this.find(key, node.right);
    }
  }
};
