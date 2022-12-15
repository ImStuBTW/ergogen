module.exports = {
    nets: {
      SDA: undefined,
      SCL: undefined,
      VCC: 'undefined',
      GND: 'undefined'
    },
    params: {
      class: 'OLED',
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference       
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value OLED (at 0 -7.3) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
        */}

        ${'' /* pins 
        (pad 4 thru_hole oval (at 1.6 2.18 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SDA.str})
        (pad 3 thru_hole oval (at 1.6 4.72 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SCL.str})
        (pad 2 thru_hole oval (at 1.6 7.26 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.VCC.str})
        (pad 1 thru_hole rect (at 1.6 9.8 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.GND.str})*/}

        (fp_arc (start 1.625 2.25) (end 0.25 2.25) (angle 180) (layer Edge.Cuts) (width 0.15))
        (fp_line (start 3 2.25) (end 3 10) (layer Edge.Cuts) (width 0.15))
        (fp_arc (start 1.625 10) (end 0.25 10) (angle -180) (layer Edge.Cuts) (width 0.15))
        (fp_line (start 0.25 2.25) (end 0.25 10) (layer Edge.Cuts) (width 0.15))
        )
        `
}