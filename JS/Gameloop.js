function GameLoop() {
    document.getElementById("Time").textContent = "You have " + format(player.seconds, precision = 2) + " seconds."
    document.getElementById("tg-mult").textContent = format(player.tg.mult, precision = 2) + "x"
    document.getElementById("ta-mult").textContent = format(player.ta.mult, precision = 2) + "x"
    document.getElementById("tj-mult").textContent = format(player.tj.mult, precision = 2) + "x"
    document.getElementById("ts-mult").textContent = format(player.ts.mult, precision = 2) + "x"
    document.getElementById("tc-mult").textContent = format(player.tc.mult, precision = 2) + "x"
    document.getElementById("tp-mult").textContent = format(player.tp.mult, precision = 2) + "x"
    document.getElementById("tl-mult").textContent = format(player.tl.mult, precision = 2) + "x"
    document.getElementById("td-mult").textContent = format(player.td.mult, precision = 2) + "x"
    document.getElementById("tg-amt").textContent = format(player.tg.amt, precision = 0)
    document.getElementById("ta-amt").textContent = format(player.ta.amt, precision = 0)
    document.getElementById("tj-amt").textContent = format(player.tj.amt, precision = 0)
    document.getElementById("ts-amt").textContent = format(player.ts.amt, precision = 0)
    document.getElementById("tc-amt").textContent = format(player.tc.amt, precision = 0)
    document.getElementById("tp-amt").textContent = format(player.tp.amt, precision = 0)
    document.getElementById("tl-amt").textContent = format(player.tl.amt, precision = 0)
    document.getElementById("td-amt").textContent = format(player.td.amt, precision = 0)
    document.getElementById("tg-bought").textContent = "[" + format(player.tg.bought, precision = 0) + "]"
    document.getElementById("ta-bought").textContent = "[" + format(player.ta.bought, precision = 0) + "]"
    document.getElementById("tj-bought").textContent = "[" + format(player.tj.bought, precision = 0) + "]"
    document.getElementById("ts-bought").textContent = "[" + format(player.ts.bought, precision = 0) + "]"
    document.getElementById("tc-bought").textContent = "[" + format(player.tc.bought, precision = 0) + "]"
    document.getElementById("tp-bought").textContent = "[" + format(player.tp.bought, precision = 0) + "]"
    document.getElementById("tl-bought").textContent = "[" + format(player.tl.bought, precision = 0) + "]"
    document.getElementById("td-bought").textContent = "[" + format(player.td.bought, precision = 0) + "]"
    document.getElementById("tg-cost").textContent = format(player.tg.cost, precision = 0) + "s"
    document.getElementById("ta-cost").textContent = format(player.ta.cost, precision = 0) + "s"
    document.getElementById("tj-cost").textContent = format(player.tj.cost, precision = 0) + "s"
    document.getElementById("ts-cost").textContent = format(player.ts.cost, precision = 0) + "s"
    document.getElementById("tc-cost").textContent = format(player.tc.cost, precision = 0) + "s"
    document.getElementById("tp-cost").textContent = format(player.tp.cost, precision = 0) + "s"
    document.getElementById("tl-cost").textContent = format(player.tl.cost, precision = 0) + "s"
    document.getElementById("td-cost").textContent = format(player.td.cost, precision = 0) + "s"
    tgAmt = player.tg.amt
    tgPower = tgAmt.mul(player.tg.mult)
    player.seconds = player.seconds.add(tgPower.div(33))
    player.tg.cost = new Decimal(10).mul(new Decimal(2).pow(player.tg.bought))
    player.ta.cost = new Decimal(20).mul(new Decimal(4).pow(player.ta.bought))
    player.tj.cost = new Decimal(80).mul(new Decimal(8).pow(player.tj.bought))
    player.ts.cost = new Decimal(640).mul(new Decimal(16).pow(player.ts.bought))
    player.tc.cost = new Decimal(10240).mul(new Decimal(32).pow(player.tc.bought))
    player.tp.cost = new Decimal(327680).mul(new Decimal(64).pow(player.tp.bought))
    player.tl.cost = new Decimal(2).pow(20).mul(new Decimal(10)).mul(new Decimal(128).pow(player.tl.bought))
    player.td.cost = new Decimal(2).pow(28).mul(new Decimal(10)).mul(new Decimal(256).pow(player.td.bought))
}

setInterval(GameLoop, 33)