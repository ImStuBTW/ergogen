module.exports = {
    nets: {
        pos: undefined,
        neg: undefined
    },
    params: {
        class: 'JST',
    },
    body: p => `
    
    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer F.Cu) (tedit 58D3FE32)

        ${p.at /* parametric position */}

        ${'' /* footprint reference 
        (pad 1 thru_hole rect (at -1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.net.pos.str})
        (pad 2 thru_hole oval (at 1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) ${p.net.neg.str})*/}

        (fp_arc (start 1.25 0) (end 1.25 1.35) (angle -180) (layer Edge.Cuts) (width 0.15))
        (fp_line (start 1.25 1.35) (end -1.25 1.35) (layer Edge.Cuts) (width 0.15))
        (fp_arc (start -1.25 0) (end -1.25 1.35) (angle 180) (layer Edge.Cuts) (width 0.15))
        (fp_line (start -1.25 -1.35) (end 1.25 -1.35) (layer Edge.Cuts) (width 0.15))
            
    )
    
    `
}