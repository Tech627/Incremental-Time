let Universe = {
    Universes: new Decimal(0),
    Universe_power: new Decimal(0),
    Universe_exp: new Decimal(0.5),
    Universe_boost: new Decimal(1),
    Uni_reset_count: new Decimal(0),
    unl: false,
    pg: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pa: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pj: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    ps: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pc: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pp: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pl: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
    pd: {
        amt: new Decimal(0),
        bought: new Decimal(0),
        mult: new Decimal(1),
        cost: new Decimal(1),
    },
}

function UniReset() {
    if(Universe.Uni_reset_count.gte(1)) {
        Universe.Universes = Universe.Uni_reset_count
        Universe.Uni_reset_count = new Decimal(0)
        Universe.unl = true
    }
}

function BuyPG() {
    if(Universe.Universes.gte(Universe.pg.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pg.cost)
        Universe.pg.amt = Universe.pg.amt.add(1)
        Universe.pg.bought = Universe.pg.bought.add(1)
        Universe.pg.mult = Universe.pg.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPA() {
    if(Universe.Universes.gte(Universe.pa.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pa.cost)
        Universe.pa.amt = Universe.pa.amt.add(1)
        Universe.pa.bought = Universe.pa.bought.add(1)
        Universe.pa.mult = Universe.pa.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPJ() {
    if(Universe.Universes.gte(Universe.pj.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pj.cost)
        Universe.pj.amt = Universe.pj.amt.add(1)
        Universe.pj.bought = Universe.pj.bought.add(1)
        Universe.pj.mult = Universe.pj.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPS() {
    if(Universe.Universes.gte(Universe.ps.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.ps.cost)
        Universe.ps.amt = Universe.ps.amt.add(1)
        Universe.ps.bought = Universe.ps.bought.add(1)
        Universe.ps.mult = Universe.ps.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPC() {
    if(Universe.Universes.gte(Universe.pc.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pc.cost)
        Universe.pc.amt = Universe.pc.amt.add(1)
        Universe.pc.bought = Universe.pc.bought.add(1)
        Universe.pc.mult = Universe.pc.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPP() {
    if(Universe.Universes.gte(Universe.pp.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pp.cost)
        Universe.pp.amt = Universe.pp.amt.add(1)
        Universe.pp.bought = Universe.pp.bought.add(1)
        Universe.pp.mult = Universe.pp.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPL() {
    if(Universe.Universes.gte(Universe.pl.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pl.cost)
        Universe.pl.amt = Universe.pl.amt.add(1)
        Universe.pl.bought = Universe.pl.bought.add(1)
        Universe.pl.mult = Universe.pl.mult.mul(new Decimal(0.04).add(1))
    }
}

function BuyPD() {
    if(Universe.Universes.gte(Universe.pd.cost)) {
        Universe.Universes = Universe.Universes.sub(Universe.pd.cost)
        Universe.pd.amt = Universe.pd.amt.add(1)
        Universe.pd.bought = Universe.pd.bought.add(1)
        Universe.pd.mult = Universe.pd.mult.mul(new Decimal(0.04).add(1))
    }
}