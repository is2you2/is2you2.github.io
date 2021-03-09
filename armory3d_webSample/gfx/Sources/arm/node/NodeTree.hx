package arm.node;

@:keep class NodeTree extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _RemoveObject = new armory.logicnode.RemoveObjectNode(this);
		var _OnMouse = new armory.logicnode.OnMouseNode(this);
		_OnMouse.property0 = "Down";
		_OnMouse.property1 = "left";
		_OnMouse.addOutputs([_RemoveObject]);
		_RemoveObject.addInput(_OnMouse, 0);
		var _Self = new armory.logicnode.SelfNode(this);
		_Self.addOutputs([_RemoveObject]);
		_RemoveObject.addInput(_Self, 0);
		_RemoveObject.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
