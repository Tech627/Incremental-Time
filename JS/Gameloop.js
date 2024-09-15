function GameLoop() {
    document.getElementById("Time").textContent = "You have " + format(player.seconds, precision = 3) + " seconds."
    if(player.seconds.gte(4.35e18)) {
        document.getElementById("Universe-reset").style.visibility = "visible"
    }
    if(Universe.unl === true) {
        document.getElementById("Universe-tab").style.visibility = "visible"
        document.getElementById("Upgrades-tab").style.visibility = "visible"
    }
    document.getElementById("uni-desc").textContent = "Consolidate your generators and your time for " + format(Universe.Uni_reset_count) + " universes."
    document.getElementById("Uni-count").textContent = "You have " + format(Universe.Universes, precision = 3) + " Universes"
    document.getElementById("Universal-power").textContent = format(Universe.Universe_power, precision = 3)
    document.getElementById("Uni-exponent").textContent = format(Universe.Universe_exp, precision = 3)
    document.getElementById("Uni-mult").textContent = format(Universe.Universe_boost, precision = 3)
    document.getElementById("booster-mult").textContent = format(player.booster.mult, precision = 3) + "x to all of the generators"
    document.getElementById("booster-cost").textContent = format(player.booster.cost, precision = 3) + "s"
    document.getElementById("tg-mult").textContent = format(player.tg.mult, precision = 3) + "x"
    document.getElementById("ta-mult").textContent = format(player.ta.mult, precision = 3) + "x"
    document.getElementById("tj-mult").textContent = format(player.tj.mult, precision = 3) + "x"
    document.getElementById("ts-mult").textContent = format(player.ts.mult, precision = 3) + "x"
    document.getElementById("tc-mult").textContent = format(player.tc.mult, precision = 3) + "x"
    document.getElementById("tp-mult").textContent = format(player.tp.mult, precision = 3) + "x"
    document.getElementById("tl-mult").textContent = format(player.tl.mult, precision = 3) + "x"
    document.getElementById("td-mult").textContent = format(player.td.mult, precision = 3) + "x"
    document.getElementById("tg-amt").textContent = format(player.tg.amt, precision = 3)
    document.getElementById("ta-amt").textContent = format(player.ta.amt, precision = 3)
    document.getElementById("tj-amt").textContent = format(player.tj.amt, precision = 3)
    document.getElementById("ts-amt").textContent = format(player.ts.amt, precision = 3)
    document.getElementById("tc-amt").textContent = format(player.tc.amt, precision = 3)
    document.getElementById("tp-amt").textContent = format(player.tp.amt, precision = 3)
    document.getElementById("tl-amt").textContent = format(player.tl.amt, precision = 3)
    document.getElementById("td-amt").textContent = format(player.td.amt, precision = 3)
    document.getElementById("tg-bought").textContent = "[" + format(player.tg.bought, precision = 3) + "]"
    document.getElementById("ta-bought").textContent = "[" + format(player.ta.bought, precision = 3) + "]"
    document.getElementById("tj-bought").textContent = "[" + format(player.tj.bought, precision = 3) + "]"
    document.getElementById("ts-bought").textContent = "[" + format(player.ts.bought, precision = 3) + "]"
    document.getElementById("tc-bought").textContent = "[" + format(player.tc.bought, precision = 3) + "]"
    document.getElementById("tp-bought").textContent = "[" + format(player.tp.bought, precision = 3) + "]"
    document.getElementById("tl-bought").textContent = "[" + format(player.tl.bought, precision = 3) + "]"
    document.getElementById("td-bought").textContent = "[" + format(player.td.bought, precision = 3) + "]"
    document.getElementById("tg-cost").textContent = format(player.tg.cost, precision = 3) + "s"
    document.getElementById("ta-cost").textContent = format(player.ta.cost, precision = 3) + "s"
    document.getElementById("tj-cost").textContent = format(player.tj.cost, precision = 3) + "s"
    document.getElementById("ts-cost").textContent = format(player.ts.cost, precision = 3) + "s"
    document.getElementById("tc-cost").textContent = format(player.tc.cost, precision = 3) + "s"
    document.getElementById("tp-cost").textContent = format(player.tp.cost, precision = 3) + "s"
    document.getElementById("tl-cost").textContent = format(player.tl.cost, precision = 3) + "s"
    document.getElementById("td-cost").textContent = format(player.td.cost, precision = 3) + "s"
    document.getElementById("pg-mult").textContent = format(Universe.pg.mult, precision = 3) + "x"
    document.getElementById("pa-mult").textContent = format(Universe.pa.mult, precision = 3) + "x"
    document.getElementById("pj-mult").textContent = format(Universe.pj.mult, precision = 3) + "x"
    document.getElementById("ps-mult").textContent = format(Universe.ps.mult, precision = 3) + "x"
    document.getElementById("pc-mult").textContent = format(Universe.pc.mult, precision = 3) + "x"
    document.getElementById("pp-mult").textContent = format(Universe.pp.mult, precision = 3) + "x"
    document.getElementById("pl-mult").textContent = format(Universe.pl.mult, precision = 3) + "x"
    document.getElementById("pd-mult").textContent = format(Universe.pd.mult, precision = 3) + "x"
    document.getElementById("pg-amt").textContent = format(Universe.pg.amt, precision = 3)
    document.getElementById("pa-amt").textContent = format(Universe.pa.amt, precision = 3)
    document.getElementById("pj-amt").textContent = format(Universe.pj.amt, precision = 3)
    document.getElementById("ps-amt").textContent = format(Universe.ps.amt, precision = 3)
    document.getElementById("pc-amt").textContent = format(Universe.pc.amt, precision = 3)
    document.getElementById("pp-amt").textContent = format(Universe.pp.amt, precision = 3)
    document.getElementById("pl-amt").textContent = format(Universe.pl.amt, precision = 3)
    document.getElementById("pd-amt").textContent = format(Universe.pd.amt, precision = 3)
    document.getElementById("pg-bought").textContent = "[" + format(Universe.pg.bought, precision = 3) + "]"
    document.getElementById("pa-bought").textContent = "[" + format(Universe.pa.bought, precision = 3) + "]"
    document.getElementById("pj-bought").textContent = "[" + format(Universe.pj.bought, precision = 3) + "]"
    document.getElementById("ps-bought").textContent = "[" + format(Universe.ps.bought, precision = 3) + "]"
    document.getElementById("pc-bought").textContent = "[" + format(Universe.pc.bought, precision = 3) + "]"
    document.getElementById("pp-bought").textContent = "[" + format(Universe.pp.bought, precision = 3) + "]"
    document.getElementById("pl-bought").textContent = "[" + format(Universe.pl.bought, precision = 3) + "]"
    document.getElementById("pd-bought").textContent = "[" + format(Universe.pd.bought, precision = 3) + "]"
    document.getElementById("pg-cost").textContent = format(Universe.pg.cost, precision = 3) + " uni"
    document.getElementById("pa-cost").textContent = format(Universe.pa.cost, precision = 3) + " uni"
    document.getElementById("pj-cost").textContent = format(Universe.pj.cost, precision = 3) + " uni"
    document.getElementById("ps-cost").textContent = format(Universe.ps.cost, precision = 3) + " uni"
    document.getElementById("pc-cost").textContent = format(Universe.pc.cost, precision = 3) + " uni"
    document.getElementById("pp-cost").textContent = format(Universe.pp.cost, precision = 3) + " uni"
    document.getElementById("pl-cost").textContent = format(Universe.pl.cost, precision = 3) + " uni"
    document.getElementById("pd-cost").textContent = format(Universe.pd.cost, precision = 3) + " uni"
    tgAmt = player.tg.amt
    tgPower = tgAmt.mul(player.tg.mult).mul(player.booster.mult)
    taAmt = player.ta.amt
    taPower = taAmt.mul(player.ta.mult).mul(player.booster.mult)
    tjAmt = player.tj.amt
    tjPower = tjAmt.mul(player.tj.mult).mul(player.booster.mult)
    tsAmt = player.ts.amt
    tsPower = tsAmt.mul(player.ts.mult).mul(player.booster.mult)
    tcAmt = player.tc.amt
    tcPower = tcAmt.mul(player.tc.mult).mul(player.booster.mult)
    tpAmt = player.tp.amt
    tpPower = tpAmt.mul(player.tp.mult).mul(player.booster.mult)
    tlAmt = player.tl.amt
    tlPower = tlAmt.mul(player.tl.mult).mul(player.booster.mult)
    tdAmt = player.td.amt
    tdPower = tdAmt.mul(player.td.mult).mul(player.booster.mult)
    player.seconds = player.seconds.add(tgPower.div(33).mul(Universe.Universe_boost))
    player.tg.amt = player.tg.amt.add(taPower.div(33).mul(Universe.Universe_boost))
    player.ta.amt = player.ta.amt.add(tjPower.div(33).mul(Universe.Universe_boost))
    player.tj.amt = player.tj.amt.add(tsPower.div(33).mul(Universe.Universe_boost))
    player.ts.amt = player.ts.amt.add(tcPower.div(33).mul(Universe.Universe_boost))
    player.tc.amt = player.tc.amt.add(tpPower.div(33).mul(Universe.Universe_boost))
    player.tp.amt = player.tp.amt.add(tlPower.div(33).mul(Universe.Universe_boost))
    player.tl.amt = player.tl.amt.add(tdPower.div(33).mul(Universe.Universe_boost))
    pgAmt = Universe.pg.amt
    pgPower = pgAmt.mul(Universe.pg.mult)
    paAmt = Universe.pa.amt
    paPower = paAmt.mul(Universe.pa.mult)
    pjAmt = Universe.pj.amt
    pjPower = pjAmt.mul(Universe.pj.mult)
    psAmt = Universe.ps.amt
    psPower = psAmt.mul(Universe.ps.mult)
    pcAmt = Universe.pc.amt
    pcPower = pcAmt.mul(Universe.pc.mult)
    ppAmt = Universe.pp.amt
    ppPower = ppAmt.mul(Universe.pp.mult)
    plAmt = Universe.pl.amt
    plPower = plAmt.mul(Universe.pl.mult)
    pdAmt = Universe.pd.amt
    pdPower = pdAmt.mul(Universe.pd.mult)
    Universe.Universe_power = Universe.Universe_power.add(pgPower.div(33))
    Universe.Uni_reset_count = player.seconds.cbrt(player.seconds.div(4.351968).mul(new Decimal(10).pow(17)))
    Universe.pg.amt = Universe.pg.amt.add(paPower.div(33))
    Universe.pa.amt = Universe.pa.amt.add(pjPower.div(33))
    Universe.pj.amt = Universe.pj.amt.add(psPower.div(33))
    Universe.ps.amt = Universe.ps.amt.add(pcPower.div(33))
    Universe.pc.amt = Universe.pc.amt.add(ppPower.div(33))
    Universe.pp.amt = Universe.pp.amt.add(plPower.div(33))
    Universe.pl.amt = Universe.pl.amt.add(pdPower.div(33))
    Universe.Universe_boost = Universe.Universe_power.pow(Universe.Universe_exp).add(1)
    player.booster.cost = new Decimal(10).pow(new Decimal(6).add(player.booster.bought).pow(1.5))
    player.tg.cost = new Decimal(10).mul(new Decimal(2).pow(player.tg.bought))
    player.ta.cost = new Decimal(20).mul(new Decimal(4).pow(player.ta.bought))
    player.tj.cost = new Decimal(80).mul(new Decimal(8).pow(player.tj.bought))
    player.ts.cost = new Decimal(640).mul(new Decimal(16).pow(player.ts.bought))
    player.tc.cost = new Decimal(10240).mul(new Decimal(32).pow(player.tc.bought))
    player.tp.cost = new Decimal(327680).mul(new Decimal(64).pow(player.tp.bought))
    player.tl.cost = new Decimal(2).pow(20).mul(new Decimal(10)).mul(new Decimal(128).pow(player.tl.bought))
    player.td.cost = new Decimal(2).pow(28).mul(new Decimal(10)).mul(new Decimal(256).pow(player.td.bought))
    Universe.pg.cost = new Decimal(2).pow(Universe.pg.bought)
    Universe.pa.cost = new Decimal(4).mul(new Decimal(4).pow(Universe.pa.bought))
    Universe.pj.cost = new Decimal(16).mul(new Decimal(8).pow(Universe.pj.bought))
    Universe.ps.cost = new Decimal(128).mul(new Decimal(16).pow(Universe.ps.bought))
    Universe.pc.cost = new Decimal(2048).mul(new Decimal(32).pow(Universe.pc.bought))
    Universe.pp.cost = new Decimal(65536).mul(new Decimal(64).pow(Universe.pp.bought))
    Universe.pl.cost = (new Decimal(2).pow(22)).mul(new Decimal(128).pow(Universe.pl.bought))
    Universe.pd.cost = (new Decimal(2).pow(29)).mul(new Decimal(256).pow(Universe.pd.bought))
}

setInterval(GameLoop, 33)