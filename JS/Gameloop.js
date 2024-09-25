function GameLoop() {
        document.getElementById("Time").textContent = "You have " + TimeFormat(player.seconds)
    if(Universe.unl === true) {
        document.getElementById("Universe-tab").style.visibility = "visible"
        document.getElementById("Upgrades-tab").style.visibility = "visible"
    }
    document.getElementById("uni-desc").textContent = "Consolidate your generators and your time for " + format(Universe.Uni_reset_count) + " universes."
    document.getElementById("Uni-count").textContent = "You have " + format(Universe.Universes) + " Universes"
    document.getElementById("Universal-power").textContent = format(Universe.Universe_power)
    document.getElementById("Uni-exponent").textContent = format(Universe.Universe_exp)
    document.getElementById("Uni-mult").textContent = format(Universe.Universe_boost)
    document.getElementById("booster-mult").textContent = format(player.booster.mult) + "x to all of the generators"
    document.getElementById("booster-cost").textContent = TimeFormat(player.booster.cost)
    document.getElementById("tg-mult").textContent = format(player.tg.mult) + "x"
    document.getElementById("ta-mult").textContent = format(player.ta.mult) + "x"
    document.getElementById("tj-mult").textContent = format(player.tj.mult) + "x"
    document.getElementById("ts-mult").textContent = format(player.ts.mult) + "x"
    document.getElementById("tc-mult").textContent = format(player.tc.mult) + "x"
    document.getElementById("tp-mult").textContent = format(player.tp.mult) + "x"
    document.getElementById("tl-mult").textContent = format(player.tl.mult) + "x"
    document.getElementById("td-mult").textContent = format(player.td.mult) + "x"
    document.getElementById("tg-amt").textContent = format(player.tg.amt)
    document.getElementById("ta-amt").textContent = format(player.ta.amt)
    document.getElementById("tj-amt").textContent = format(player.tj.amt)
    document.getElementById("ts-amt").textContent = format(player.ts.amt)
    document.getElementById("tc-amt").textContent = format(player.tc.amt)
    document.getElementById("tp-amt").textContent = format(player.tp.amt)
    document.getElementById("tl-amt").textContent = format(player.tl.amt)
    document.getElementById("td-amt").textContent = format(player.td.amt)
    document.getElementById("tg-bought").textContent = "[" + format(player.tg.bought) + "]"
    document.getElementById("ta-bought").textContent = "[" + format(player.ta.bought) + "]"
    document.getElementById("tj-bought").textContent = "[" + format(player.tj.bought) + "]"
    document.getElementById("ts-bought").textContent = "[" + format(player.ts.bought) + "]"
    document.getElementById("tc-bought").textContent = "[" + format(player.tc.bought) + "]"
    document.getElementById("tp-bought").textContent = "[" + format(player.tp.bought) + "]"
    document.getElementById("tl-bought").textContent = "[" + format(player.tl.bought) + "]"
    document.getElementById("td-bought").textContent = "[" + format(player.td.bought) + "]"
    document.getElementById("tg-cost").textContent = TimeFormat(player.tg.cost)
    document.getElementById("ta-cost").textContent = TimeFormat(player.ta.cost)
    document.getElementById("tj-cost").textContent = TimeFormat(player.tj.cost) 
    document.getElementById("ts-cost").textContent = TimeFormat(player.ts.cost)
    document.getElementById("tc-cost").textContent = TimeFormat(player.tc.cost) 
    document.getElementById("tp-cost").textContent = TimeFormat(player.tp.cost) 
    document.getElementById("tl-cost").textContent = TimeFormat(player.tl.cost) 
    document.getElementById("td-cost").textContent = TimeFormat(player.td.cost) 
    document.getElementById("pg-mult").textContent = format(Universe.pg.mult) + "x"
    document.getElementById("pa-mult").textContent = format(Universe.pa.mult) + "x"
    document.getElementById("pj-mult").textContent = format(Universe.pj.mult) + "x"
    document.getElementById("ps-mult").textContent = format(Universe.ps.mult) + "x"
    document.getElementById("pc-mult").textContent = format(Universe.pc.mult) + "x"
    document.getElementById("pp-mult").textContent = format(Universe.pp.mult) + "x"
    document.getElementById("pl-mult").textContent = format(Universe.pl.mult) + "x"
    document.getElementById("pd-mult").textContent = format(Universe.pd.mult) + "x"
    document.getElementById("pg-amt").textContent = format(Universe.pg.amt)
    document.getElementById("pa-amt").textContent = format(Universe.pa.amt)
    document.getElementById("pj-amt").textContent = format(Universe.pj.amt)
    document.getElementById("ps-amt").textContent = format(Universe.ps.amt)
    document.getElementById("pc-amt").textContent = format(Universe.pc.amt)
    document.getElementById("pp-amt").textContent = format(Universe.pp.amt)
    document.getElementById("pl-amt").textContent = format(Universe.pl.amt)
    document.getElementById("pd-amt").textContent = format(Universe.pd.amt)
    document.getElementById("pg-bought").textContent = "[" + format(Universe.pg.bought) + "]"
    document.getElementById("pa-bought").textContent = "[" + format(Universe.pa.bought) + "]"
    document.getElementById("pj-bought").textContent = "[" + format(Universe.pj.bought) + "]"
    document.getElementById("ps-bought").textContent = "[" + format(Universe.ps.bought) + "]"
    document.getElementById("pc-bought").textContent = "[" + format(Universe.pc.bought) + "]"
    document.getElementById("pp-bought").textContent = "[" + format(Universe.pp.bought) + "]"
    document.getElementById("pl-bought").textContent = "[" + format(Universe.pl.bought) + "]"
    document.getElementById("pd-bought").textContent = "[" + format(Universe.pd.bought) + "]"
    document.getElementById("pg-cost").textContent = format(Universe.pg.cost) + " uni"
    document.getElementById("pa-cost").textContent = format(Universe.pa.cost) + " uni"
    document.getElementById("pj-cost").textContent = format(Universe.pj.cost) + " uni"
    document.getElementById("ps-cost").textContent = format(Universe.ps.cost) + " uni"
    document.getElementById("pc-cost").textContent = format(Universe.pc.cost) + " uni"
    document.getElementById("pp-cost").textContent = format(Universe.pp.cost) + " uni"
    document.getElementById("pl-cost").textContent = format(Universe.pl.cost) + " uni"
    document.getElementById("pd-cost").textContent = format(Universe.pd.cost) + " uni"
    document.getElementById("up1-cost").textContent = "Cost: " + format(Uni_ups.up1.cost) + " Universes"
    document.getElementById("up2-cost").textContent = "Cost: " + format(Uni_ups.up2.cost) + " Universes"
    document.getElementById("up3-cost").textContent = "Cost: " + format(Uni_ups.up3.cost) + " Universes"
    document.getElementById("up4-cost").textContent = "Cost: " + format(Uni_ups.up4.cost) + " Universes"
    document.getElementById("up5-cost").textContent = "Cost: " + format(Uni_ups.up5.cost) + " Universes"
    document.getElementById("up6-cost").textContent = "Cost: " + format(Uni_ups.up6.cost) + " Universes"
    document.getElementById("up6-level").textContent = "Level: " + formatWhole(Uni_ups.up6.level) + " / 10"
    document.getElementById("up7-cost").textContent = "Cost: " + format(Uni_ups.up7.cost) + " Universes"
    tgAmt = player.tg.amt
    tgPower = tgAmt.mul(player.tg.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    taAmt = player.ta.amt
    taPower = taAmt.mul(player.ta.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tjAmt = player.tj.amt
    tjPower = tjAmt.mul(player.tj.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tsAmt = player.ts.amt
    tsPower = tsAmt.mul(player.ts.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tcAmt = player.tc.amt
    tcPower = tcAmt.mul(player.tc.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tpAmt = player.tp.amt
    tpPower = tpAmt.mul(player.tp.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tlAmt = player.tl.amt
    tlPower = tlAmt.mul(player.tl.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    tdAmt = player.td.amt
    tdPower = tdAmt.mul(player.td.mult).mul(player.booster.mult.mul(Uni_ups.up2.bought.mul(5).div(100).add(1)))
    player.seconds = player.seconds.add(tgPower.div(33).mul(Universe.Universe_boost))
    player.tg.amt = player.tg.amt.add(taPower.div(33).mul(Universe.Universe_boost))
    player.ta.amt = player.ta.amt.add(tjPower.div(33).mul(Universe.Universe_boost))
    player.tj.amt = player.tj.amt.add(tsPower.div(33).mul(Universe.Universe_boost))
    player.ts.amt = player.ts.amt.add(tcPower.div(33).mul(Universe.Universe_boost))
    player.tc.amt = player.tc.amt.add(tpPower.div(33).mul(Universe.Universe_boost))
    player.tp.amt = player.tp.amt.add(tlPower.div(33).mul(Universe.Universe_boost))
    player.tl.amt = player.tl.amt.add(tdPower.div(33).mul(Universe.Universe_boost))
    pgAmt = Universe.pg.bought.mul(Universe.pg.amt.add(1))
    pgPower = pgAmt.mul(Universe.pg.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    paAmt = Universe.pa.bought.mul(Universe.pa.amt.add(1))
    paPower = paAmt.mul(Universe.pa.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    pjAmt = Universe.pj.bought.mul(Universe.pj.amt.add(1))
    pjPower = pjAmt.mul(Universe.pj.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    psAmt = Universe.ps.bought.mul(Universe.ps.amt.add(1))
    psPower = psAmt.mul(Universe.ps.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    pcAmt = Universe.pc.bought.mul(Universe.pc.amt.add(1))
    pcPower = pcAmt.mul(Universe.pc.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    ppAmt = Universe.pp.bought.mul(Universe.pp.amt.add(1))
    ppPower = ppAmt.mul(Universe.pp.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    plAmt = Universe.pl.bought.mul(Universe.pl.amt.add(1))
    plPower = plAmt.mul(Universe.pl.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
    pdAmt = Universe.pd.bought.mul(Universe.pd.amt.add(1))
    pdPower = pdAmt.mul(Universe.pd.mult.mul(Uni_ups.up5.bought.mul(25).div(100).add(1)))
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
    Uup6Eff = new Decimal(0.5).mul(Uni_ups.up6.bought.mul(5).div(100).add(1))
    Universe.Universe_exp = Uup6Eff
    player.booster.cost = new Decimal(10).pow(new Decimal(6).add(player.booster.bought).pow(1.5))
    player.tg.cost = new Decimal(10).mul(new Decimal(2).pow(player.tg.bought))
    player.ta.cost = new Decimal(20).mul(new Decimal(4).pow(player.ta.bought))
    player.tj.cost = new Decimal(160).mul(new Decimal(8).pow(player.tj.bought))
    player.ts.cost = new Decimal(5120).mul(new Decimal(16).pow(player.ts.bought))
    player.tc.cost = new Decimal(655360).mul(new Decimal(32).pow(player.tc.bought))
    player.tp.cost = new Decimal(2).pow(25).mul(new Decimal(64).pow(player.tp.bought))
    player.tl.cost = new Decimal(2).pow(36).mul(new Decimal(10)).mul(new Decimal(128).pow(player.tl.bought))
    player.td.cost = new Decimal(2).pow(49).mul(new Decimal(10)).mul(new Decimal(256).pow(player.td.bought))
    Universe.pg.cost = new Decimal(2).pow(Universe.pg.bought)
    Universe.pa.cost = new Decimal(4).mul(new Decimal(4).pow(Universe.pa.bought))
    Universe.pj.cost = new Decimal(16).mul(new Decimal(8).pow(Universe.pj.bought))
    Universe.ps.cost = new Decimal(128).mul(new Decimal(16).pow(Universe.ps.bought))
    Universe.pc.cost = new Decimal(2048).mul(new Decimal(32).pow(Universe.pc.bought))
    Universe.pp.cost = new Decimal(65536).mul(new Decimal(64).pow(Universe.pp.bought))
    Universe.pl.cost = (new Decimal(2).pow(22)).mul(new Decimal(128).pow(Universe.pl.bought))
    Universe.pd.cost = (new Decimal(2).pow(29)).mul(new Decimal(256).pow(Universe.pd.bought))
    Uni_ups.up2.cost = new Decimal(10).mul(new Decimal(1.75).pow(Uni_ups.up2.bought))
    Uni_ups.up5.cost = new Decimal(500).mul(new Decimal(2).pow(Uni_ups.up5.bought))
    Uni_ups.up6.cost = new Decimal(1000).mul(new Decimal(5).pow(Uni_ups.up6.bought))
    if(Uni_ups.up3.bought === true) {
        BuyPG()
        BuyPA()
        BuyPJ()
        BuyPS()
        BuyPC()
        BuyPP()
        BuyPL()
        BuyPD()
    }
    if(Uni_ups.up7.bought === true) {
        Universe.Universes = Universe.Universes.add(Universe.Uni_reset_count.div(10))
    }
}

setInterval(GameLoop, 33)