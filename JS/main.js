let player = {
    seconds: new Decimal(10),
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

function BuyTG() {
    if(player.seconds.gte(player.tg.cost)) {
        player.seconds = player.seconds.sub(player.tg.cost)
        player.tg.bought = player.tg.bought.add(1)
        player.tg.amt = player.tg.amt.add(1)
        player.tg.mult = player.tg.mult.add(new Decimal(2).pow(0.1).sub(1))
    }
}