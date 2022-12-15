module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
    },
    body: p => {
    return `
        (module kbd:ResetSW (layer F.Cu) (tedit 5B9559E6) (tstamp 61905781)
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 2.55) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 -2.55) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

            ${'' /* pins 
            (pad 2 thru_hole circle (at -3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask F.SilkS) ${p.net.from.str})
            (pad 1 thru_hole circle (at 3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask F.SilkS) ${p.net.to.str})*/}

            (fp_arc (start 3.25 0) (end 3.25 1.35) (angle -180) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.25 1.35) (end -3.25 1.35) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start -3.25 0) (end -3.25 1.35) (angle 180) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -3.25 -1.35) (end 3.25 -1.35) (layer Edge.Cuts) (width 0.15))
        )
        `
    }
}