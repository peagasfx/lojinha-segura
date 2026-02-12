import {d as e, l as t, x as n} from "./index-CRH4LhSi.js";
var r = n()
  , i = e();
function a() {
    let e = t()
      , [n,a] = (0,
    r.useState)(``)
      , [o,s] = (0,
    r.useState)( () => {
        let e = localStorage.getItem(`checkout_address`);
        return e ? JSON.parse(e) : {
            nome: ``,
            telefone: ``,
            email: ``,
            cep: ``,
            estado: ``,
            cidade: ``,
            bairro: ``,
            endereco: ``,
            numero: ``,
            complemento: ``
        }
    }
    )
      , [c,l] = (0,
    r.useState)(!1)
      , u = (0,
    r.useRef)(null)
      , d = (e, t) => s(n => ({
        ...n,
        [e]: t
    }))
      , f = (0,
    r.useCallback)(async e => {
        let t = e.replace(/\D/g, ``);
        if (t.length !== 8)
            return;
        u.current && u.current.abort();
        let n = new AbortController;
        u.current = n,
        l(!0);
        try {
            let e = null;
            try {
                let r = await fetch(`https://brasilapi.com.br/api/cep/v1/${t}`, {
                    signal: n.signal
                });
                if (r.ok) {
                    let t = await r.json();
                    e = {
                        logradouro: t.street,
                        bairro: t.neighborhood,
                        cidade: t.city,
                        estado: t.state
                    }
                }
            } catch (e) {
                if (e.name === `AbortError`)
                    throw e
            }
            if (!e) {
                let r = await (await fetch(`https://viacep.com.br/ws/${t}/json/`, {
                    signal: n.signal
                })).json();
                r && !r.erro && (e = {
                    logradouro: r.logradouro,
                    bairro: r.bairro,
                    cidade: r.localidade,
                    estado: r.uf
                })
            }
            e && s(t => ({
                ...t,
                endereco: e.logradouro || t.endereco,
                bairro: e.bairro || t.bairro,
                cidade: e.cidade || t.cidade,
                estado: e.estado || t.estado
            }))
        } catch (e) {
            e.name !== `AbortError` && console.error(`Erro ao buscar CEP:`, e)
        } finally {
            l(!1)
        }
    }
    , []);
    return (0,
    i.jsxs)(`div`, {
        className: `address-page`,
        children: [(0,
        i.jsxs)(`div`, {
            className: `address-header`,
            children: [(0,
            i.jsx)(`button`, {
                className: `address-back-btn`,
                onClick: () => e(-1),
                children: (0,
                i.jsx)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: (0,
                    i.jsx)(`polyline`, {
                        points: `15 18 9 12 15 6`
                    })
                })
            }), (0,
            i.jsx)(`h1`, {
                className: `address-title`,
                children: `Adicionar endereço`
            })]
        }), (0,
        i.jsxs)(`div`, {
            className: `address-form`,
            children: [n && (0,
            i.jsx)(`div`, {
                style: {
                    background: `#ffe3e3`,
                    color: `#c62828`,
                    padding: `10px 14px`,
                    borderRadius: 8,
                    margin: `0 0 12px`,
                    fontSize: 13,
                    textAlign: `center`
                },
                children: n
            }), (0,
            i.jsxs)(`div`, {
                className: `address-section`,
                children: [(0,
                i.jsx)(`h3`, {
                    className: `address-section-title`,
                    children: `Informações de contato`
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `Nome e sobrenome`
                    }), (0,
                    i.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Nome Sobrenome`,
                        value: o.nome,
                        onChange: e => d(`nome`, e.target.value)
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `Número de telefone`
                    }), (0,
                    i.jsx)(`input`, {
                        type: `tel`,
                        placeholder: `11987654321`,
                        value: o.telefone,
                        onChange: e => {
                            let t = e.target.value.replace(/\D/g, ``);
                            t.length > 11 && (t = t.slice(0, 11)),
                            d(`telefone`, t)
                        }
                        ,
                        maxLength: 11
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `E-mail`
                    }), (0,
                    i.jsx)(`input`, {
                        type: `email`,
                        placeholder: `exemplo@email.com`,
                        value: o.email,
                        onChange: e => d(`email`, e.target.value)
                    })]
                })]
            }), (0,
            i.jsxs)(`div`, {
                className: `address-section`,
                children: [(0,
                i.jsx)(`h3`, {
                    className: `address-section-title`,
                    children: `Informações de endereço`
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `CEP`
                    }), (0,
                    i.jsxs)(`div`, {
                        style: {
                            position: `relative`
                        },
                        children: [(0,
                        i.jsx)(`input`, {
                            type: `text`,
                            placeholder: `00000-000`,
                            value: o.cep,
                            onChange: e => {
                                let t = e.target.value.replace(/\D/g, ``);
                                t.length > 5 && (t = t.slice(0, 5) + `-` + t.slice(5, 8)),
                                d(`cep`, t),
                                f(t)
                            }
                            ,
                            maxLength: 9,
                            inputMode: `numeric`
                        }), c && (0,
                        i.jsx)(`span`, {
                            style: {
                                position: `absolute`,
                                right: 12,
                                top: `50%`,
                                transform: `translateY(-50%)`,
                                fontSize: 12,
                                color: `#999`
                            },
                            children: `Buscando...`
                        })]
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-row`,
                    children: [(0,
                    i.jsxs)(`div`, {
                        className: `address-field`,
                        children: [(0,
                        i.jsx)(`label`, {
                            children: `Estado / UF`
                        }), (0,
                        i.jsxs)(`select`, {
                            value: o.estado,
                            onChange: e => d(`estado`, e.target.value),
                            children: [(0,
                            i.jsx)(`option`, {
                                value: ``,
                                children: `Selecione`
                            }), `AC.AL.AP.AM.BA.CE.DF.ES.GO.MA.MT.MS.MG.PA.PB.PR.PE.PI.RJ.RN.RS.RO.RR.SC.SP.SE.TO`.split(`.`).map(e => (0,
                            i.jsx)(`option`, {
                                value: e,
                                children: e
                            }, e))]
                        })]
                    }), (0,
                    i.jsxs)(`div`, {
                        className: `address-field`,
                        children: [(0,
                        i.jsx)(`label`, {
                            children: `Cidade`
                        }), (0,
                        i.jsx)(`input`, {
                            type: `text`,
                            placeholder: `Cidade`,
                            value: o.cidade,
                            onChange: e => d(`cidade`, e.target.value)
                        })]
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `Bairro`
                    }), (0,
                    i.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Bairro`,
                        value: o.bairro,
                        onChange: e => d(`bairro`, e.target.value)
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-field`,
                    children: [(0,
                    i.jsx)(`label`, {
                        children: `Endereço`
                    }), (0,
                    i.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Rua, Avenida...`,
                        value: o.endereco,
                        onChange: e => d(`endereco`, e.target.value)
                    })]
                }), (0,
                i.jsxs)(`div`, {
                    className: `address-row`,
                    children: [(0,
                    i.jsxs)(`div`, {
                        className: `address-field`,
                        children: [(0,
                        i.jsx)(`label`, {
                            children: `Nº da residência`
                        }), (0,
                        i.jsx)(`input`, {
                            type: `text`,
                            placeholder: `000`,
                            value: o.numero,
                            onChange: e => d(`numero`, e.target.value)
                        })]
                    }), (0,
                    i.jsxs)(`div`, {
                        className: `address-field`,
                        children: [(0,
                        i.jsx)(`label`, {
                            children: `Complemento (opcional)`
                        }), (0,
                        i.jsx)(`input`, {
                            type: `text`,
                            placeholder: `Apto 101`,
                            value: o.complemento,
                            onChange: e => d(`complemento`, e.target.value)
                        })]
                    })]
                })]
            })]
        }), (0,
        i.jsx)(`div`, {
            className: `address-footer`,
            children: (0,
            i.jsx)(`button`, {
                className: `address-save-btn`,
                onClick: () => {
                    if (a(``),
                    !o.nome.trim()) {
                        a(`Preencha o nome e sobrenome.`);
                        return
                    }
                    if (!o.telefone.trim()) {
                        a(`Preencha o número de telefone.`);
                        return
                    }
                    if (o.telefone.replace(/\D/g, ``).length !== 11) {
                        a(`O telefone deve ter exatamente 11 dígitos (com DDD).`);
                        return
                    }
                    if (!o.email.trim()) {
                        a(`Preencha o e-mail.`);
                        return
                    }
                    if (!o.cep.trim()) {
                        a(`Preencha o CEP.`);
                        return
                    }
                    if (!o.endereco.trim()) {
                        a(`Preencha o endereço.`);
                        return
                    }
                    localStorage.setItem(`checkout_address`, JSON.stringify(o)),
                    e(`/checkout`)
                }
                ,
                children: `Salvar endereço`
            })
        })]
    })
}
export {a as default};
