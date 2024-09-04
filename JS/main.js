let player = {
    seconds: new Decimal(10),
    booster: {
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    tg: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    ta: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    tj: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    ts: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    tc: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    tp: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    tl: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    td: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
}

function BuyBooster() {
    if(player.seconds.gte(player.booster.cost)) {
        player.seconds = player.seconds.sub(player.booster.cost)
        player.booster.bought = player.booster.bought.add(1)
        player.booster.mult = player.booster.mult.mul(1.1)
    }
}

function BuyTG() {
    if(player.seconds.gte(player.tg.cost)) {
        player.seconds = player.seconds.sub(player.tg.cost)
        player.tg.bought = player.tg.bought.add(1)
        player.tg.amt = player.tg.amt.add(1)
        player.tg.mult = player.tg.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTA() {
    if(player.seconds.gte(player.ta.cost)) {
        player.seconds = player.seconds.sub(player.ta.cost)
        player.ta.bought = player.ta.bought.add(1)
        player.ta.amt = player.ta.amt.add(1)
        player.ta.mult = player.ta.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTJ() {
    if(player.seconds.gte(player.tj.cost)) {
        player.seconds = player.seconds.sub(player.tj.cost)
        player.tj.bought = player.tj.bought.add(1)
        player.tj.amt = player.tj.amt.add(1)
        player.tj.mult = player.tj.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTS() {
    if(player.seconds.gte(player.ts.cost)) {
        player.seconds = player.seconds.sub(player.ts.cost)
        player.ts.bought = player.ts.bought.add(1)
        player.ts.amt = player.ts.amt.add(1)
        player.ts.mult = player.ts.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTC() {
    if(player.seconds.gte(player.tc.cost)) {
        player.seconds = player.seconds.sub(player.tc.cost)
        player.tc.bought = player.tc.bought.add(1)
        player.tc.amt = player.tc.amt.add(1)
        player.tc.mult = player.tc.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTP() {
    if(player.seconds.gte(player.tp.cost)) {
        player.seconds = player.seconds.sub(player.tp.cost)
        player.tp.bought = player.tp.bought.add(1)
        player.tp.amt = player.tp.amt.add(1)
        player.tp.mult = player.tp.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTL() {
    if(player.seconds.gte(player.tl.cost)) {
        player.seconds = player.seconds.sub(player.tl.cost)
        player.tl.bought = player.tl.bought.add(1)
        player.tl.amt = player.tl.amt.add(1)
        player.tl.mult = player.tl.mult.mul(new Decimal(2).pow(0.1))
    }
}

function BuyTD() {
    if(player.seconds.gte(player.td.cost)) {
        player.seconds = player.seconds.sub(player.td.cost)
        player.td.bought = player.td.bought.add(1)
        player.td.amt = player.td.amt.add(1)
        player.td.mult = player.td.mult.mul(new Decimal(2).pow(0.1))
    }
}