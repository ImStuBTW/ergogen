# Ergogen (ChonkV Fork)

Ergogen is a keyboard generator that aims to provide a common configuration format to describe **ergonomic** 2D layouts, and generate automatic plates, cases, and (un-routed) PCBs for them.
The project grew out of (and is an integral part of) the [Absolem keyboard](https://zealot.hu/absolem), and shares its [Discord server](https://discord.gg/nbKcAZB) as well.

For usage and config information, please refer to the [docs](https://docs.ergogen.xyz).

This work was created to aid in the development of the [ChonkV keyboard](https://github.com/ImStuartJones/ergogen).

## Additional Footprints

The choc footprint has been updated with a new "variant" attribute. Instead of offering only a hotswap *or* throug-hole variety, a `variant: both` option has been included to allow a dual hotswap and through-hole PCB footprint.

The diode footprint has been updated with a "variant" attribute as well. Options include, `variant: through-hole`, `variant: dual-smd`, `variant: front`, or `variant: back`. Through-hole keeps the default diode footprint with through holes and dual smd pads. Dual-smd drops the through holes, but puts pads on both sides of the PCB. Front and back allow you to put surface mount pads on only one side of the board.

The mounting hole footprints were sourced from [MvEerd's mounting hole](https://github.com/MvEerd/ergogen/pull/6) pull request. This footprint is designed for M2 screws.

The 2 pin through-hole push button footprint was sourced from [Tarneaux's supersplit keyboard](https://github.com/tarneaux/supersplit/blob/ba3eadcae2446f496cd67b3c8ec7804a96f18b8e/ergogen/src/footprints/button.js). This footprint works with a standard two pin 3*6*4.3mm pushbutton.

## Backplate Footprints

This library also includes footprints used for the creation of some [Horizon](https://github.com/skarrmann/horizon) or [ChocV](https://github.com/brickbots/chocV) style backplates. These stacked style cases have an innert second PCB on the bottom of the keyboard with holes that cover the components from the main PCB. This sort of design makes a keyboard PCB more rigid without adding a lot of extra height.

New footprints include: A through-hole pushbutton backplate, a Choc hotswap backplate, a smd diode backplate, a jst battery header backplate, an oled backplate, and a pro micro backplate. These footprints took a while to create, and were designed with the [ChonkV keyboard](https://github.com/ImStuartJones/ergogen) in mind. The smd diode backplate is intended for smd dides on the back of a pcb only (not the through-hole or front variant). The Choc footprint only has holes for the Choc v1 hotswap sockets. You can explore the original Horizon footprints for through-hole Choc backlate footprints.

## Usage

Give 'er the ol' `npm install`, then from inside of the ergogen folder run `node src/cli.js [config location] [output folder]`.

## Contributions

Feature ideas, documentation improvements, examples, tests, or pull requests welcome!
Get in touch [on Discord](https://discord.gg/nbKcAZB), and we can definitely find something you can help with, if you'd like to.