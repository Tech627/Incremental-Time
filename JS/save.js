function Save() {
    if(localStorage) {
        localStorage.setItem("seconds", JSON.stringify(player.seconds))
        localStorage.setItem("Universes", JSON.stringify(Universe.Universes))
        localStorage.setItem("Universe-power", JSON.stringify(Universe.Universe_power))
        localStorage.setItem("Uni-exp", JSON.stringify(Universe.Universe_exp))
        localStorage.setItem("Uni-boost", JSON.stringify(Universe.Universe_boost))
        localStorage.setItem("Uni-unl", JSON.stringify(Universe.unl))
        localStorage.setItem("booster-mult", JSON.stringify(player.booster.mult))
        localStorage.setItem("booster-bought", JSON.stringify(player.booster.bought))
        localStorage.setItem("booster-cost", JSON.stringify(player.booster.cost))
        localStorage.setItem("tg-mult", JSON.stringify(player.tg.mult))
        localStorage.setItem("ta-mult", JSON.stringify(player.ta.mult))
        localStorage.setItem("tj-mult", JSON.stringify(player.tj.mult))
        localStorage.setItem("ts-mult", JSON.stringify(player.ts.mult))
        localStorage.setItem("tc-mult", JSON.stringify(player.tc.mult))
        localStorage.setItem("tp-mult", JSON.stringify(player.tp.mult))
        localStorage.setItem("tl-mult", JSON.stringify(player.tl.mult))
        localStorage.setItem("td-mult", JSON.stringify(player.td.mult))
        localStorage.setItem("tg-amt", JSON.stringify(player.tg.amt))
        localStorage.setItem("ta-amt", JSON.stringify(player.ta.amt))
        localStorage.setItem("tj-amt", JSON.stringify(player.tj.amt))
        localStorage.setItem("ts-amt", JSON.stringify(player.ts.amt))
        localStorage.setItem("tc-amt", JSON.stringify(player.tc.amt))
        localStorage.setItem("tp-amt", JSON.stringify(player.tp.amt))
        localStorage.setItem("tl-amt", JSON.stringify(player.tl.amt))
        localStorage.setItem("td-amt", JSON.stringify(player.td.amt))
        localStorage.setItem("tg-bought", JSON.stringify(player.tg.bought))
        localStorage.setItem("ta-bought", JSON.stringify(player.ta.bought))
        localStorage.setItem("tj-bought", JSON.stringify(player.tj.bought))
        localStorage.setItem("ts-bought", JSON.stringify(player.ts.bought))
        localStorage.setItem("tc-bought", JSON.stringify(player.tc.bought))
        localStorage.setItem("tp-bought", JSON.stringify(player.tp.bought))
        localStorage.setItem("tl-bought", JSON.stringify(player.tl.bought))
        localStorage.setItem("td-bought", JSON.stringify(player.td.bought))
        localStorage.setItem("tg-cost", JSON.stringify(player.tg.cost))
        localStorage.setItem("ta-cost", JSON.stringify(player.ta.cost))
        localStorage.setItem("tj-cost", JSON.stringify(player.tj.cost))
        localStorage.setItem("ts-cost", JSON.stringify(player.ts.cost))
        localStorage.setItem("tc-cost", JSON.stringify(player.tc.cost))
        localStorage.setItem("tp-cost", JSON.stringify(player.tp.cost))
        localStorage.setItem("tl-cost", JSON.stringify(player.tl.cost))
        localStorage.setItem("td-cost", JSON.stringify(player.td.cost))
        localStorage.setItem("pg-mult", JSON.stringify(Universe.pg.mult))
        localStorage.setItem("pa-mult", JSON.stringify(Universe.pa.mult))
        localStorage.setItem("pj-mult", JSON.stringify(Universe.pj.mult))
        localStorage.setItem("ps-mult", JSON.stringify(Universe.ps.mult))
        localStorage.setItem("pc-mult", JSON.stringify(Universe.pc.mult))
        localStorage.setItem("pp-mult", JSON.stringify(Universe.pp.mult))
        localStorage.setItem("pl-mult", JSON.stringify(Universe.pl.mult))
        localStorage.setItem("pd-mult", JSON.stringify(Universe.pd.mult))
        localStorage.setItem("pg-amt", JSON.stringify(Universe.pg.amt))
        localStorage.setItem("pa-amt", JSON.stringify(Universe.pa.amt))
        localStorage.setItem("pj-amt", JSON.stringify(Universe.pj.amt))
        localStorage.setItem("ps-amt", JSON.stringify(Universe.ps.amt))
        localStorage.setItem("pc-amt", JSON.stringify(Universe.pc.amt))
        localStorage.setItem("pp-amt", JSON.stringify(Universe.pp.amt))
        localStorage.setItem("pl-amt", JSON.stringify(Universe.pl.amt))
        localStorage.setItem("pd-amt", JSON.stringify(Universe.pd.amt))
        localStorage.setItem("pg-bought", JSON.stringify(Universe.pg.bought))
        localStorage.setItem("pa-bought", JSON.stringify(Universe.pa.bought))
        localStorage.setItem("pj-bought", JSON.stringify(Universe.pj.bought))
        localStorage.setItem("ps-bought", JSON.stringify(Universe.ps.bought))
        localStorage.setItem("pc-bought", JSON.stringify(Universe.pc.bought))
        localStorage.setItem("pp-bought", JSON.stringify(Universe.pp.bought))
        localStorage.setItem("pl-bought", JSON.stringify(Universe.pl.bought))
        localStorage.setItem("pd-bought", JSON.stringify(Universe.pd.bought))
        localStorage.setItem("pg-cost", JSON.stringify(Universe.pg.cost))
        localStorage.setItem("pa-cost", JSON.stringify(Universe.pa.cost))
        localStorage.setItem("pj-cost", JSON.stringify(Universe.pj.cost))
        localStorage.setItem("ps-cost", JSON.stringify(Universe.ps.cost))
        localStorage.setItem("pc-cost", JSON.stringify(Universe.pc.cost))
        localStorage.setItem("pp-cost", JSON.stringify(Universe.pp.cost))
        localStorage.setItem("pl-cost", JSON.stringify(Universe.pl.cost))
        localStorage.setItem("pd-cost", JSON.stringify(Universe.pd.cost))
    }
}

function Get() {
    if(localStorage) {
        const SavedSeconds = localStorage.getItem("seconds")
        const SavedUniverses = localStorage.getItem("Universes")
        const SavedUniversePower = localStorage.getItem("Universe-power")
        const SavedUniExp = localStorage.getItem("Uni-exp")
        const SavedUniBoost = localStorage.getItem("Uni-boost")
        const SavedUniUnl = localStorage.getItem("Uni-unl")
        const SavedBoosterMult = localStorage.getItem("booster-mult")
        const SavedBoosterBought = localStorage.getItem("booster-bought")
        const SavedBoosterCost = localStorage.getItem("booster-cost")
        const SavedTgMult = localStorage.getItem("tg-mult")
        const SavedTaMult = localStorage.getItem("ta-mult")
        const SavedTjMult = localStorage.getItem("tj-mult")
        const SavedTsMult = localStorage.getItem("ts-mult")
        const SavedTcMult = localStorage.getItem("tc-mult")
        const SavedTpMult = localStorage.getItem("tp-mult")
        const SavedTlMult = localStorage.getItem("tl-mult")
        const SavedTdMult = localStorage.getItem("td-mult")
        const SavedTgAmt = localStorage.getItem("tg-amt")
        const SavedTaAmt = localStorage.getItem("ta-amt")
        const SavedTjAmt = localStorage.getItem("tj-amt")
        const SavedTsAmt = localStorage.getItem("ts-amt")
        const SavedTcAmt = localStorage.getItem("tc-amt")
        const SavedTpAmt = localStorage.getItem("tp-amt")
        const SavedTlAmt = localStorage.getItem("tl-amt")
        const SavedTdAmt = localStorage.getItem("td-amt")
        const SavedTgBought = localStorage.getItem("tg-bought")
        const SavedTaBought = localStorage.getItem("ta-bought")
        const SavedTjBought = localStorage.getItem("tj-bought")
        const SavedTsBought = localStorage.getItem("ts-bought")
        const SavedTcBought = localStorage.getItem("tc-bought")
        const SavedTpBought = localStorage.getItem("tp-bought")
        const SavedTlBought = localStorage.getItem("tl-bought")
        const SavedTdBought = localStorage.getItem("td-bought")
        const SavedTgCost = localStorage.getItem("tg-cost")
        const SavedTaCost = localStorage.getItem("ta-cost")
        const SavedTjCost = localStorage.getItem("tj-cost")
        const SavedTsCost = localStorage.getItem("ts-cost")
        const SavedTcCost = localStorage.getItem("tc-cost")
        const SavedTpCost = localStorage.getItem("tp-cost")
        const SavedTlCost = localStorage.getItem("tl-cost")
        const SavedTdCost = localStorage.getItem("td-cost")
        const SavedPgMult = localStorage.getItem("pg-mult")
        const SavedPaMult = localStorage.getItem("pa-mult")
        const SavedPjMult = localStorage.getItem("pj-mult")
        const SavedPsMult = localStorage.getItem("ps-mult")
        const SavedPcMult = localStorage.getItem("pc-mult")
        const SavedPpMult = localStorage.getItem("pp-mult")
        const SavedPlMult = localStorage.getItem("pl-mult")
        const SavedPdMult = localStorage.getItem("pd-mult")
        const SavedPgAmt = localStorage.getItem("pg-amt")
        const SavedPaAmt = localStorage.getItem("pa-amt")
        const SavedPjAmt = localStorage.getItem("pj-amt")
        const SavedPsAmt = localStorage.getItem("ps-amt")
        const SavedPcAmt = localStorage.getItem("pc-amt")
        const SavedPpAmt = localStorage.getItem("pp-amt")
        const SavedPlAmt = localStorage.getItem("pl-amt")
        const SavedPdAmt = localStorage.getItem("pd-amt")
        const SavedPgBought = localStorage.getItem("pg-bought")
        const SavedPaBought = localStorage.getItem("pa-bought")
        const SavedPjBought = localStorage.getItem("pj-bought")
        const SavedPsBought = localStorage.getItem("ps-bought")
        const SavedPcBought = localStorage.getItem("pc-bought")
        const SavedPpBought = localStorage.getItem("pp-bought")
        const SavedPlBought = localStorage.getItem("pl-bought")
        const SavedPdBought = localStorage.getItem("pd-bought")
        const SavedPgCost = localStorage.getItem("pg-cost")
        const SavedPaCost = localStorage.getItem("pa-cost")
        const SavedPjCost = localStorage.getItem("pj-cost")
        const SavedPsCost = localStorage.getItem("ps-cost")
        const SavedPcCost = localStorage.getItem("pc-cost")
        const SavedPpCost = localStorage.getItem("pp-cost")
        const SavedPlCost = localStorage.getItem("pl-cost")
        const SavedPdCost = localStorage.getItem("pd-cost")
        if(SavedSeconds) {
            player.seconds = new Decimal(JSON.parse(SavedSeconds))
        }
        if(SavedUniverses) {
            Universe.Universes = new Decimal(JSON.parse(SavedUniverses))
        }
        if(SavedUniversePower) {
            Universe.Universe_power = new Decimal(JSON.parse(SavedUniversePower))
        }
        if(SavedUniExp) {
            Universe.Universe_exp = new Decimal(JSON.parse(SavedUniExp))
        }
        if(SavedUniBoost) {
            Universe.Universe_boost = new Decimal(JSON.parse(SavedUniBoost))
        }
        if(SavedUniUnl) {
            Universe.unl = JSON.parse(SavedUniUnl)
        }
        if(SavedBoosterMult) {
            player.booster.mult = new Decimal(JSON.parse(player.booster.mult))
        }
        if(SavedBoosterBought) {
            player.booster.bought = new Decimal(JSON.parse(player.booster.bought))
        }
        if(SavedBoosterCost) {
            player.booster.cost = new Decimal(JSON.parse(player.booster.cost))
        }
         if(SavedTgAmt) {
            player.tg.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTaAmt) {
            player.ta.amt = new Decimal(JSON.parse(SavedTaAmt))
        }
        if(SavedTjAmt) {
            player.tj.amt = new Decimal(JSON.parse(SavedTjAmt))
        }
        if(SavedTsAmt) {
            player.ts.amt = new Decimal(JSON.parse(SavedTsAmt))
        }
        if(SavedTcAmt) {
            player.tc.amt = new Decimal(JSON.parse(SavedTcAmt))
        }
        if(SavedTpAmt) {
            player.tp.amt = new Decimal(JSON.parse(SavedTpAmt))
        }
        if(SavedTlAmt) {
            player.tl.amt = new Decimal(JSON.parse(SavedTlAmt))
        }
        if(SavedTdAmt) {
            player.td.amt = new Decimal(JSON.parse(SavedTdAmt))
        }
        if(SavedTgMult) {
            player.tg.mult = new Decimal(JSON.parse(SavedTgMult))
        }
        if(SavedTaMult) {
            player.ta.mult = new Decimal(JSON.parse(SavedTaMult))
        }
        if(SavedTjMult) {
            player.tj.mult = new Decimal(JSON.parse(SavedTjMult))
        }
        if(SavedTsMult) {
            player.ts.mult = new Decimal(JSON.parse(SavedTsMult))
        }
        if(SavedTcMult) {
            player.tc.mult = new Decimal(JSON.parse(SavedTcMult))
        }
        if(SavedTpMult) {
            player.tp.mult = new Decimal(JSON.parse(SavedTpMult))
        }
        if(SavedTlMult) {
            player.tl.mult = new Decimal(JSON.parse(SavedTlMult))
        }
        if(SavedTdMult) {
            player.td.mult = new Decimal(JSON.parse(SavedTdMult))
        }
        if(SavedTgBought) {
            player.tg.bought = new Decimal(JSON.parse(SavedTgBought))
        }
        if(SavedTaBought) {
            player.ta.bought = new Decimal(JSON.parse(SavedTaBought))
        }
        if(SavedTjBought) {
            player.tj.bought = new Decimal(JSON.parse(SavedTjBought))
        }
        if(SavedTsBought) {
            player.ts.bought = new Decimal(JSON.parse(SavedTsBought))
        }
        if(SavedTcBought) {
            player.tc.bought = new Decimal(JSON.parse(SavedTcBought))
        }
        if(SavedTpBought) {
            player.tp.bought = new Decimal(JSON.parse(SavedTpBought))
        }
        if(SavedTlBought) {
            player.tl.bought = new Decimal(JSON.parse(SavedTlBought))
        }
        if(SavedTdBought) {
            player.td.bought = new Decimal(JSON.parse(SavedTdBought))
        }
        if(SavedTgCost) {
            player.tg.cost = new Decimal(JSON.parse(SavedTgCost))
        }
        if(SavedTaCost) {
            player.ta.cost = new Decimal(JSON.parse(SavedTaCost))
        }
        if(SavedTjCost) {
            player.tj.cost = new Decimal(JSON.parse(SavedTjCost))
        }
        if(SavedTsCost) {
            player.ts.cost = new Decimal(JSON.parse(SavedTsCost))
        }
        if(SavedTcCost) {
            player.tc.cost = new Decimal(JSON.parse(SavedTcCost))
        }
        if(SavedTpCost) {
            player.tp.cost = new Decimal(JSON.parse(SavedTpCost))
        }
        if(SavedTlCost) {
            player.tl.cost = new Decimal(JSON.parse(SavedTlCost))
        }
        if(SavedTdCost) {
            player.td.cost = new Decimal(JSON.parse(SavedTdCost))
        }
        if(SavedPgMult) {
            Universe.pg.mult = new Decimal(JSON.parse(SavedPgMult))
        }
        if(SavedPaMult) {
            Universe.pa.mult = new Decimal(JSON.parse(SavedPaMult))
        }
        if(SavedPjMult) {
            Universe.pj.mult = new Decimal(JSON.parse(SavedPjMult))
        }
        if(SavedPsMult) {
            Universe.ps.mult = new Decimal(JSON.parse(SavedPsMult))
        }
        if(SavedPcMult) {
            Universe.pc.mult = new Decimal(JSON.parse(SavedPcMult))
        }
        if(SavedPpMult) {
            Universe.pp.mult = new Decimal(JSON.parse(SavedPpMult))
        }
        if(SavedPlMult) {
            Universe.pl.mult = new Decimal(JSON.parse(SavedPlMult))
        }
        if(SavedPdMult) {
            Universe.pd.mult = new Decimal(JSON.parse(SavedPdMult))
        }
        if(SavedPgAmt) {
            Universe.pg.amt = new Decimal(JSON.parse(SavedPgAmt))
        }
        if(SavedPaAmt) {
            Universe.pa.amt = new Decimal(JSON.parse(SavedPaAmt))
        }
        if(SavedPjAmt) {
            Universe.pj.amt = new Decimal(JSON.parse(SavedPjAmt))
        }
        if(SavedPsAmt) {
            Universe.ps.amt = new Decimal(JSON.parse(SavedPsAmt))
        }
        if(SavedPcAmt) {
            Universe.pc.amt = new Decimal(JSON.parse(SavedPcAmt))
        }
        if(SavedPpAmt) {
            Universe.pp.amt = new Decimal(JSON.parse(SavedPpAmt))
        }
        if(SavedPlAmt) {
            Universe.pl.amt = new Decimal(JSON.parse(SavedPlAmt))
        }
        if(SavedPdAmt) {
            Universe.pd.amt = new Decimal(JSON.parse(SavedPdAmt))
        }
        if(SavedPgBought) {
            Universe.pg.bought = new Decimal(JSON.parse(SavedPgBought))
        }
        if(SavedPaBought) {
            Universe.pa.bought = new Decimal(JSON.parse(SavedPaBought))
        }
        if(SavedPjBought) {
            Universe.pj.bought = new Decimal(JSON.parse(SavedPjBought))
        }
        if(SavedPsBought) {
            Universe.ps.bought = new Decimal(JSON.parse(SavedPsBought))
        }
        if(SavedPcBought) {
            Universe.pc.bought = new Decimal(JSON.parse(SavedPcBought))
        }
        if(SavedPpBought) {
            Universe.pp.bought = new Decimal(JSON.parse(SavedPpBought))
        }
        if(SavedPlBought) {
            Universe.pl.bought = new Decimal(JSON.parse(SavedPlBought))
        }
        if(SavedPdBought) {
            Universe.pd.bought = new Decimal(JSON.parse(SavedPdBought))
        }
        if(SavedPgCost) {
            Universe.pg.cost = new Decimal(JSON.parse(SavedPgCost))
        }
        if(SavedPaCost) {
            Universe.pa.cost = new Decimal(JSON.parse(SavedPaCost))
        }
        if(SavedPjCost) {
            Universe.pj.cost = new Decimal(JSON.parse(SavedPjCost))
        }
        if(SavedPsCost) {
            Universe.ps.cost = new Decimal(JSON.parse(SavedPsCost))
        }
        if(SavedPcCost) {
            Universe.pc.cost = new Decimal(JSON.parse(SavedPcCost))
        }
        if(SavedPpCost) {
            Universe.pp.cost = new Decimal(JSON.parse(SavedPpCost))
        }
        if(SavedPlCost) {
            Universe.pl.cost = new Decimal(JSON.parse(SavedPlCost))
        }
        if(SavedPdCost) {
            Universe.pd.cost = new Decimal(JSON.parse(SavedPdCost))
        }
    }
}

function HardReset() {
    if(confirm("Are you sure you want to do that? All that progress for nothing after all.")) {
        localStorage.clear()
        location.reload()
    }
}

setInterval(Save, 10000)