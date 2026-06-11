package com.compositemachines.block;

public enum PortType {
    ITEM_INPUT,
    ITEM_OUTPUT,
    ENERGY;

    public boolean isItem() {
        return this != ENERGY;
    }
}
