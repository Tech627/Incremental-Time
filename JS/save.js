function Save() {
    if(localStorage) {
        localStorage.setItem("seconds", JSON.stringify(player.seconds))
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
    }
}

function Get() {
    if(localStorage) {
        const SavedSeconds = localStorage.getItem("seconds")
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
        if(SavedSeconds) {
            player.seconds = new Decimal(JSON.parse(SavedSeconds))
        }
        if(SavedTgAmt) {
            player.tg.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTaAmt) {
            player.ta.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTjAmt) {
            player.tj.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTsAmt) {
            player.ts.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTcAmt) {
            player.tc.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTpAmt) {
            player.tp.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTlAmt) {
            player.tl.amt = new Decimal(JSON.parse(SavedTgAmt))
        }
        if(SavedTdAmt) {
            player.td.amt = new Decimal(JSON.parse(SavedTgAmt))
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
    }
}

function HardReset() {
    if(confirm("Are you sure you want to do that? All that progress for nothing after all.")) {
        localStorage.clear()
        location.reload()
    }
}

setInterval(Save, 10000)