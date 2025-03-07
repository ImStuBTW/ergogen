module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'D',
        variant: 'through-hole'
    },
    body: p => {
        if(p.param.variant == 'through-hole') {
            return `
                (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


                ${p.at /* parametric position */}
        
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
                
                ${''/* diode symbols */}
                (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
            
                ${''/* SMD pads on both sides */}
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.from.str})
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
                
                ${''/* THT terminals */}
                (pad 1 thru_hole circle (at 3.81 0 ${p.rot}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.from.str})
                (pad 2 thru_hole rect (at -3.81 0 ${p.rot}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.net.to.str})
            )
            `
        }
        else if(p.param.variant == 'dual-smd') {
            return `
                (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


                ${p.at /* parametric position */}
        
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
                
                ${''/* diode symbols */}
                (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
            
                ${''/* SMD pads on both sides */}
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.from.str})
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
            )
            `
        }
        else if(p.param.variant == 'front') {
            return `
                (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


                ${p.at /* parametric position */}
        
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
                
                ${''/* diode symbols */}
                (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
            
                ${''/* SMD pads on both sides */}
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
            )
            `
        }
        else if(p.param.variant == 'back') {
            return `
                (module ComboDiode (layer F.Cu) (tedit 5B24D78E)


                ${p.at /* parametric position */}
        
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer B.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer B.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
                
                ${''/* diode symbols */}
                (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
                (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
                (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))
            
                ${''/* SMD pads on both sides */}
                (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.from.str})
                (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
            )
            `
        }
    }
}