import {a as e, d as t, f as n, i as r, l as i, r as a, s as o, u as s, x as c} from "./index-CRH4LhSi.js";
var l = c()
  , u = t();
function d() {
    let t = i()
      , {items: c, totalPrice: d, totalOldPrice: f, clearCart: p, updateQuantity: m} = s()
      , [h,g] = (0,
    l.useState)(!1)
      , [_,v] = (0,
    l.useState)(``)
      , [y,b] = (0,
    l.useState)(!1)
      , [x,S] = (0,
    l.useState)(!1)
      , [C,w] = (0,
    l.useState)(!1)
      , [T,E] = (0,
    l.useState)([])
      , [D,O] = (0,
    l.useState)(null)
      , [k,A] = (0,
    l.useState)(`pix`)
      , [j,M] = (0,
    l.useState)(!1)
      , [N,P] = (0,
    l.useState)( () => localStorage.getItem(`checkout_cpf`) || ``)
      , [F,I] = (0,
    l.useState)(null)
      , [L,R] = (0,
    l.useState)( () => {
        let e = localStorage.getItem(`checkout_card`);
        return e ? JSON.parse(e) : {
            numero: ``,
            nome: ``,
            validade: ``,
            cvv: ``
        }
    }
    )
      , [z,B] = (0,
    l.useState)( () => {
        let e = localStorage.getItem(`checkout_card`);
        if (e) {
            let t = (JSON.parse(e).numero || ``).replace(/\D/g, ``);
            if (/^4/.test(t))
                return `visa`;
            if (/^5[1-5]/.test(t) || /^2[2-7]/.test(t))
                return `mastercard`;
            if (/^3[47]/.test(t))
                return `amex`;
            if (/^(636368|438935|504175|451416|636297)/.test(t) || /^(5067|4576|4011)/.test(t))
                return `elo`
        }
        return null
    }
    )
      , V = (0,
    l.useRef)(!1);
    (0,
    l.useEffect)( () => {
        if (!_)
            return;
        let e = setTimeout( () => v(``), 4e3);
        return () => clearTimeout(e)
    }
    , [_]);
    let H = e => {
        let t = e.replace(/\D/g, ``);
        return /^4/.test(t) ? `visa` : /^5[1-5]/.test(t) || /^2[2-7]/.test(t) ? `mastercard` : /^3[47]/.test(t) ? `amex` : /^6(?:011|5)/.test(t) ? `discover` : /^(636368|438935|504175|451416|636297)/.test(t) || /^(5067|4576|4011)/.test(t) ? `elo` : null
    }
      , U = e => e.replace(/\D/g, ``).slice(0, 16).replace(/(\d{4})(?=\d)/g, `$1 `)
      , W = e => {
        let t = e.replace(/\D/g, ``).slice(0, 4);
        return t.length >= 3 ? t.slice(0, 2) + `/` + t.slice(2) : t
    }
    ;
    (0,
    l.useEffect)( () => {
        localStorage.setItem(`checkout_cpf`, N)
    }
    , [N]),
    (0,
    l.useEffect)( () => {
        let e = localStorage.getItem(`checkout_address`);
        e && I(JSON.parse(e))
    }
    , []),
    (0,
    l.useEffect)( () => {
        let e = () => {
            let e = localStorage.getItem(`checkout_address`);
            e && I(JSON.parse(e))
        }
        ;
        window.addEventListener(`focus`, e),
        window.addEventListener(`popstate`, e),
        document.addEventListener(`visibilitychange`, () => {
            document.visibilityState === `visible` && e()
        }
        );
        let t = setInterval(e, 1e3);
        return () => {
            window.removeEventListener(`focus`, e),
            window.removeEventListener(`popstate`, e),
            clearInterval(t)
        }
    }
    , []),
    (0,
    l.useEffect)( () => {
        c.length === 0 && !V.current && t(`/carrinho`, {
            replace: !0
        })
    }
    , [c.length, t]),
    (0,
    l.useEffect)( () => {
        c.length !== 0 && e().then(e => {
            console.log(`Dados da API de frete:`, e);
            let t = Array.isArray(e) && e.length > 0 ? e.map(e => ({
                ...e,
                preco: e.valor || e.preco || 0
            })) : [{
                id: 1,
                nome: `Frete Padrão`,
                descricao: `Entrega de 4 a 7 dias`,
                preco: 0
            }, {
                id: 2,
                nome: `Frete Expresso`,
                descricao: `Entrega de 2 a 4 dias`,
                preco: 9.89
            }, {
                id: 3,
                nome: `Entrega Agendada`,
                descricao: `Agende sua entrega`,
                preco: 11.17
            }];
            console.log(`Opções de frete processadas:`, t),
            E(t),
            O(t[0])
        }
        )
    }
    , []);
    let G = D?.preco || 0
      , K = j ? 19.8 : 0
      , q = f - d
      , J = d + G + K
      , Y = e => {
        let t = e.replace(/\D/g, ``);
        if (t.length !== 11 || /^(\d)\1{10}$/.test(t))
            return !1;
        let n = 0;
        for (let e = 0; e < 9; e++)
            n += parseInt(t[e]) * (10 - e);
        let r = n * 10 % 11;
        if ((r === 10 || r === 11) && (r = 0),
        r !== parseInt(t[9]))
            return !1;
        n = 0;
        for (let e = 0; e < 10; e++)
            n += parseInt(t[e]) * (11 - e);
        return r = n * 10 % 11,
        (r === 10 || r === 11) && (r = 0),
        r === parseInt(t[10])
    }
    ;
    return c.length === 0 ? null : (0,
    u.jsxs)(u.Fragment, {
        children: [_ && (0,
        u.jsx)(`div`, {
            style: {
                position: `fixed`,
                top: 20,
                left: `50%`,
                transform: `translateX(-50%)`,
                background: `#333`,
                color: `#fff`,
                padding: `12px 20px`,
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 500,
                zIndex: 99999,
                maxWidth: `90vw`,
                textAlign: `center`,
                boxShadow: `0 4px 12px rgba(0,0,0,0.3)`,
                animation: `fadeIn 0.2s ease`
            },
            onClick: () => v(``),
            children: _
        }), h && (0,
        u.jsxs)(`div`, {
            className: `modal-loading`,
            children: [(0,
            u.jsx)(`div`, {
                style: {
                    marginBottom: 24
                },
                children: (0,
                u.jsx)(`svg`, {
                    width: `48`,
                    height: `48`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `var(--color-primary)`,
                    strokeWidth: `2`,
                    style: {
                        animation: `spin 1s linear infinite`
                    },
                    children: (0,
                    u.jsx)(`path`, {
                        d: `M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83`
                    })
                })
            }), (0,
            u.jsx)(`h2`, {
                className: `loading-title`,
                children: `Processando seu pedido`
            }), (0,
            u.jsx)(`p`, {
                className: `loading-text`,
                children: `Aguarde um momento...`
            })]
        }), (0,
        u.jsxs)(`div`, {
            className: `checkout-container`,
            children: [(0,
            u.jsxs)(`div`, {
                className: `checkout-header`,
                children: [(0,
                u.jsx)(`button`, {
                    className: `header-back-btn`,
                    onClick: () => t(-1),
                    children: (0,
                    u.jsx)(`svg`, {
                        width: `24`,
                        height: `24`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        children: (0,
                        u.jsx)(`polyline`, {
                            points: `15 18 9 12 15 6`
                        })
                    })
                }), (0,
                u.jsx)(`h1`, {
                    className: `checkout-title`,
                    children: `Resumo do pedido`
                })]
            }), (0,
            u.jsxs)(`div`, {
                className: `checkout-content`,
                children: [(0,
                u.jsxs)(`button`, {
                    className: `checkout-add-btn`,
                    onClick: () => t(`/adicionar-endereco`),
                    children: [(0,
                    u.jsx)(`span`, {
                        className: `checkout-add-icon`,
                        children: F?.nome ? (0,
                        u.jsx)(`svg`, {
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `#4caf50`,
                            strokeWidth: `2.5`,
                            children: (0,
                            u.jsx)(`polyline`, {
                                points: `20 6 9 17 4 12`
                            })
                        }) : `+`
                    }), (0,
                    u.jsx)(`span`, {
                        children: F?.nome ? `${F.nome} — ${F.endereco || ``}, ${F.numero || ``}` : `Adicionar endereço de entrega`
                    })]
                }), (0,
                u.jsxs)(`button`, {
                    className: `checkout-add-btn`,
                    onClick: () => b(!0),
                    children: [(0,
                    u.jsx)(`span`, {
                        className: `checkout-add-icon`,
                        children: N.length === 14 ? (0,
                        u.jsx)(`svg`, {
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `#4caf50`,
                            strokeWidth: `2.5`,
                            children: (0,
                            u.jsx)(`polyline`, {
                                points: `20 6 9 17 4 12`
                            })
                        }) : `+`
                    }), (0,
                    u.jsx)(`span`, {
                        children: N ? `CPF: ${N}` : `Adicionar CPF`
                    })]
                }), (0,
                u.jsx)(`div`, {
                    className: `checkout-divider`
                }), (0,
                u.jsx)(`div`, {
                    className: `checkout-store-header`,
                    children: (0,
                    u.jsxs)(`span`, {
                        className: `checkout-store-name`,
                        children: [`Loja (`, c.length, `)`]
                    })
                }), (0,
                u.jsxs)(`div`, {
                    className: `checkout-free-shipping`,
                    children: [(0,
                    u.jsxs)(`svg`, {
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        children: [(0,
                        u.jsx)(`rect`, {
                            x: `1`,
                            y: `3`,
                            width: `15`,
                            height: `13`,
                            stroke: `#00bfa5`,
                            strokeWidth: `2`,
                            fill: `none`
                        }), (0,
                        u.jsx)(`polygon`, {
                            points: `16 8 20 8 23 11 23 16 16 16 16 8`,
                            stroke: `#00bfa5`,
                            strokeWidth: `2`,
                            fill: `none`
                        }), (0,
                        u.jsx)(`circle`, {
                            cx: `5.5`,
                            cy: `18.5`,
                            r: `2.5`,
                            stroke: `#00bfa5`,
                            strokeWidth: `2`,
                            fill: `none`
                        }), (0,
                        u.jsx)(`circle`, {
                            cx: `18.5`,
                            cy: `18.5`,
                            r: `2.5`,
                            stroke: `#00bfa5`,
                            strokeWidth: `2`,
                            fill: `none`
                        })]
                    }), (0,
                    u.jsx)(`span`, {
                        children: `Você ganhou frete grátis!`
                    })]
                }), (0,
                u.jsx)(`div`, {
                    className: `checkout-items`,
                    children: c.map(e => {
                        let t = e.quantidade || 1
                          , r = Number(e.preco) || 0
                          , i = Number(e.preco_antigo) || 0
                          , a = n(r, i);
                        return (0,
                        u.jsxs)(`div`, {
                            className: `checkout-item`,
                            children: [(0,
                            u.jsx)(`img`, {
                                className: `checkout-item-image`,
                                src: e.imagem,
                                alt: e.nome
                            }), (0,
                            u.jsxs)(`div`, {
                                className: `checkout-item-info`,
                                children: [(0,
                                u.jsx)(`p`, {
                                    className: `checkout-item-name`,
                                    children: e.nome
                                }), (0,
                                u.jsxs)(`div`, {
                                    className: `checkout-item-price-row`,
                                    children: [(0,
                                    u.jsxs)(`div`, {
                                        className: `checkout-item-prices`,
                                        children: [(0,
                                        u.jsxs)(`span`, {
                                            className: `checkout-item-current-price`,
                                            children: [(0,
                                            u.jsx)(`span`, {
                                                className: `checkout-item-currency`,
                                                children: `R$`
                                            }), ` `, r.toFixed(2).replace(`.`, `,`)]
                                        }), i > r && (0,
                                        u.jsxs)(u.Fragment, {
                                            children: [(0,
                                            u.jsxs)(`span`, {
                                                className: `checkout-item-old-price`,
                                                children: [`R$ `, i.toFixed(2).replace(`.`, `,`)]
                                            }), a > 0 && (0,
                                            u.jsxs)(`span`, {
                                                className: `checkout-item-discount`,
                                                children: [`-`, a, `%`]
                                            })]
                                        })]
                                    }), (0,
                                    u.jsxs)(`div`, {
                                        className: `checkout-item-quantity`,
                                        children: [(0,
                                        u.jsx)(`button`, {
                                            className: `checkout-qty-btn`,
                                            onClick: () => m(e.key, t - 1),
                                            children: `−`
                                        }), (0,
                                        u.jsx)(`span`, {
                                            className: `checkout-qty-value`,
                                            children: t
                                        }), (0,
                                        u.jsx)(`button`, {
                                            className: `checkout-qty-btn`,
                                            onClick: () => m(e.key, t + 1),
                                            children: `+`
                                        })]
                                    })]
                                })]
                            })]
                        }, e.key)
                    }
                    )
                }), (0,
                u.jsxs)(`div`, {
                    className: `checkout-upsell-section`,
                    children: [(0,
                    u.jsx)(`h3`, {
                        className: `checkout-upsell-title`,
                        children: `Adicione a sua compra:`
                    }), (0,
                    u.jsxs)(`div`, {
                        className: `checkout-garantia-card ${j ? `selected` : ``}`,
                        children: [(0,
                        u.jsx)(`img`, {
                            className: `checkout-garantia-img`,
                            src: `https://cdn-icons-png.flaticon.com/512/2592/2592317.png`,
                            alt: `Garantia Estendida`
                        }), (0,
                        u.jsxs)(`div`, {
                            className: `checkout-garantia-info`,
                            children: [(0,
                            u.jsx)(`p`, {
                                className: `checkout-garantia-name`,
                                children: `Garantia Estendida`
                            }), (0,
                            u.jsx)(`p`, {
                                className: `checkout-garantia-desc`,
                                children: `Garantia estendida de 2 anos`
                            }), (0,
                            u.jsx)(`p`, {
                                className: `checkout-garantia-price`,
                                children: `R$ 19,80`
                            })]
                        }), (0,
                        u.jsx)(`button`, {
                            className: `checkout-upsell-btn ${j ? `selected` : ``}`,
                            onClick: () => M(!j),
                            children: j ? `ADICIONADO` : `ACEITAR OFERTA`
                        })]
                    })]
                }), (0,
                u.jsxs)(`div`, {
                    className: `checkout-frete-section`,
                    children: [(0,
                    u.jsx)(`h3`, {
                        className: `checkout-section-title`,
                        children: `Frete`
                    }), T.map(e => (0,
                    u.jsxs)(`label`, {
                        className: `checkout-frete-option`,
                        children: [(0,
                        u.jsx)(`input`, {
                            type: `radio`,
                            name: `frete`,
                            checked: D?.id === e.id,
                            onChange: () => O(e),
                            className: `checkout-frete-radio`
                        }), (0,
                        u.jsxs)(`div`, {
                            className: `checkout-frete-info`,
                            children: [(0,
                            u.jsx)(`span`, {
                                className: `checkout-frete-name`,
                                children: e.nome
                            }), (0,
                            u.jsx)(`span`, {
                                className: `checkout-frete-desc`,
                                children: e.descricao
                            })]
                        }), (0,
                        u.jsx)(`span`, {
                            className: `checkout-frete-price`,
                            children: e.preco === 0 ? (0,
                            u.jsx)(`span`, {
                                style: {
                                    color: `#00bfa5`,
                                    fontWeight: 700
                                },
                                children: `Grátis`
                            }) : `R$ ${(Number(e.preco) || 0).toFixed(2).replace(`.`, `,`)}`
                        })]
                    }, e.id))]
                }), (0,
                u.jsxs)(`div`, {
                    className: `checkout-summary`,
                    children: [(0,
                    u.jsx)(`h3`, {
                        className: `checkout-section-title`,
                        children: `Resumo do pedido`
                    }), (0,
                    u.jsxs)(`div`, {
                        className: `checkout-summary-row`,
                        children: [(0,
                        u.jsx)(`span`, {
                            children: `Subtotal`
                        }), (0,
                        u.jsxs)(`span`, {
                            children: [`R$ `, (Number(f) || 0).toFixed(2).replace(`.`, `,`)]
                        })]
                    }), q > 0 && (0,
                    u.jsxs)(`div`, {
                        className: `checkout-summary-row`,
                        style: {
                            color: `#e91e63`
                        },
                        children: [(0,
                        u.jsx)(`span`, {
                            children: `Descontos`
                        }), (0,
                        u.jsxs)(`span`, {
                            children: [`-R$ `, (Number(q) || 0).toFixed(2).replace(`.`, `,`)]
                        })]
                    }), j && (0,
                    u.jsxs)(`div`, {
                        className: `checkout-summary-row`,
                        children: [(0,
                        u.jsx)(`span`, {
                            children: `Garantia Estendida`
                        }), (0,
                        u.jsx)(`span`, {
                            children: `R$ 19,80`
                        })]
                    }), (0,
                    u.jsxs)(`div`, {
                        className: `checkout-summary-row`,
                        children: [(0,
                        u.jsx)(`span`, {
                            children: `Frete`
                        }), (0,
                        u.jsx)(`span`, {
                            style: {
                                color: `#00bfa5`,
                                fontWeight: 700
                            },
                            children: G === 0 ? `Grátis` : `R$ ${G.toFixed(2).replace(`.`, `,`)}`
                        })]
                    }), (0,
                    u.jsxs)(`div`, {
                        className: `checkout-summary-total`,
                        children: [(0,
                        u.jsx)(`span`, {
                            children: `Total`
                        }), (0,
                        u.jsxs)(`span`, {
                            children: [`R$ `, (Number(J) || 0).toFixed(2).replace(`.`, `,`)]
                        })]
                    }), (0,
                    u.jsx)(`p`, {
                        className: `checkout-summary-note`,
                        children: `Impostos inclusos`
                    })]
                }), (0,
                u.jsxs)(`div`, {
                    className: `checkout-payment-section`,
                    children: [(0,
                    u.jsx)(`h3`, {
                        className: `checkout-section-title`,
                        children: `Forma de pagamento`
                    }), (0,
                    u.jsxs)(`label`, {
                        className: `checkout-payment-option ${k === `pix` ? `selected` : ``}`,
                        children: [(0,
                        u.jsx)(`input`, {
                            type: `radio`,
                            name: `payment`,
                            value: `pix`,
                            checked: k === `pix`,
                            onChange: e => A(e.target.value),
                            className: `checkout-payment-radio`
                        }), (0,
                        u.jsx)(`div`, {
                            className: `checkout-payment-icon-wrapper`,
                            children: (0,
                            u.jsx)(`img`, {
                                src: `/pix.svg`,
                                alt: `PIX`,
                                width: `28`,
                                height: `28`,
                                style: {
                                    objectFit: `contain`
                                }
                            })
                        }), (0,
                        u.jsxs)(`div`, {
                            className: `checkout-payment-info`,
                            children: [(0,
                            u.jsx)(`span`, {
                                className: `checkout-payment-name`,
                                children: `Pix`
                            }), (0,
                            u.jsx)(`span`, {
                                className: `checkout-payment-desc`,
                                children: `Pague em até 15 minutos.`
                            })]
                        })]
                    }), (0,
                    u.jsxs)(`label`, {
                        className: `checkout-payment-option ${k === `cartao` ? `selected` : ``}`,
                        children: [(0,
                        u.jsx)(`input`, {
                            type: `radio`,
                            name: `payment`,
                            value: `cartao`,
                            checked: k === `cartao`,
                            onChange: e => A(e.target.value),
                            className: `checkout-payment-radio`
                        }), (0,
                        u.jsx)(`div`, {
                            className: `checkout-payment-icon-wrapper`,
                            children: z === `visa` ? (0,
                            u.jsxs)(`svg`, {
                                width: `36`,
                                height: `24`,
                                viewBox: `0 0 48 32`,
                                fill: `none`,
                                children: [(0,
                                u.jsx)(`rect`, {
                                    width: `48`,
                                    height: `32`,
                                    rx: `4`,
                                    fill: `#1A1F71`
                                }), (0,
                                u.jsx)(`text`, {
                                    x: `24`,
                                    y: `20`,
                                    textAnchor: `middle`,
                                    fill: `#fff`,
                                    fontSize: `14`,
                                    fontWeight: `bold`,
                                    fontFamily: `Arial`,
                                    children: `VISA`
                                })]
                            }) : z === `mastercard` ? (0,
                            u.jsxs)(`svg`, {
                                width: `36`,
                                height: `24`,
                                viewBox: `0 0 48 32`,
                                fill: `none`,
                                children: [(0,
                                u.jsx)(`rect`, {
                                    width: `48`,
                                    height: `32`,
                                    rx: `4`,
                                    fill: `#252525`
                                }), (0,
                                u.jsx)(`circle`, {
                                    cx: `19`,
                                    cy: `16`,
                                    r: `9`,
                                    fill: `#EB001B`
                                }), (0,
                                u.jsx)(`circle`, {
                                    cx: `29`,
                                    cy: `16`,
                                    r: `9`,
                                    fill: `#F79E1B`
                                }), (0,
                                u.jsx)(`path`, {
                                    d: `M24 9.2a9 9 0 010 13.6 9 9 0 000-13.6z`,
                                    fill: `#FF5F00`
                                })]
                            }) : z === `elo` ? (0,
                            u.jsxs)(`svg`, {
                                width: `36`,
                                height: `24`,
                                viewBox: `0 0 48 32`,
                                fill: `none`,
                                children: [(0,
                                u.jsx)(`rect`, {
                                    width: `48`,
                                    height: `32`,
                                    rx: `4`,
                                    fill: `#000`
                                }), (0,
                                u.jsx)(`text`, {
                                    x: `24`,
                                    y: `20`,
                                    textAnchor: `middle`,
                                    fill: `#FFD700`,
                                    fontSize: `12`,
                                    fontWeight: `bold`,
                                    fontFamily: `Arial`,
                                    children: `elo`
                                })]
                            }) : z === `amex` ? (0,
                            u.jsxs)(`svg`, {
                                width: `36`,
                                height: `24`,
                                viewBox: `0 0 48 32`,
                                fill: `none`,
                                children: [(0,
                                u.jsx)(`rect`, {
                                    width: `48`,
                                    height: `32`,
                                    rx: `4`,
                                    fill: `#006FCF`
                                }), (0,
                                u.jsx)(`text`, {
                                    x: `24`,
                                    y: `20`,
                                    textAnchor: `middle`,
                                    fill: `#fff`,
                                    fontSize: `9`,
                                    fontWeight: `bold`,
                                    fontFamily: `Arial`,
                                    children: `AMEX`
                                })]
                            }) : (0,
                            u.jsxs)(`svg`, {
                                width: `32`,
                                height: `32`,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke: `currentColor`,
                                strokeWidth: `1.5`,
                                children: [(0,
                                u.jsx)(`rect`, {
                                    x: `1`,
                                    y: `4`,
                                    width: `22`,
                                    height: `16`,
                                    rx: `2`,
                                    ry: `2`
                                }), (0,
                                u.jsx)(`line`, {
                                    x1: `1`,
                                    y1: `10`,
                                    x2: `23`,
                                    y2: `10`
                                })]
                            })
                        }), (0,
                        u.jsxs)(`div`, {
                            className: `checkout-payment-info`,
                            children: [(0,
                            u.jsx)(`span`, {
                                className: `checkout-payment-name`,
                                children: `Cartão de Crédito`
                            }), (0,
                            u.jsx)(`span`, {
                                className: `checkout-payment-desc`,
                                children: L.numero ? `•••• •••• •••• ${L.numero.replace(/\D/g, ``).slice(-4)}${z ? ` (${z.charAt(0).toUpperCase() + z.slice(1)})` : ``}` : `Pague parcelado ou à vista`
                            })]
                        })]
                    }), k === `cartao` && (0,
                    u.jsxs)(`div`, {
                        style: {
                            background: `#fff3cd`,
                            border: `1px solid #ffc107`,
                            borderRadius: 8,
                            padding: `12px 14px`,
                            marginTop: 8,
                            display: `flex`,
                            alignItems: `flex-start`,
                            gap: 10
                        },
                        children: [(0,
                        u.jsxs)(`svg`, {
                            width: `22`,
                            height: `22`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `#856404`,
                            strokeWidth: `2`,
                            style: {
                                flexShrink: 0,
                                marginTop: 1
                            },
                            children: [(0,
                            u.jsx)(`path`, {
                                d: `M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`
                            }), (0,
                            u.jsx)(`line`, {
                                x1: `12`,
                                y1: `9`,
                                x2: `12`,
                                y2: `13`
                            }), (0,
                            u.jsx)(`line`, {
                                x1: `12`,
                                y1: `17`,
                                x2: `12.01`,
                                y2: `17`
                            })]
                        }), (0,
                        u.jsx)(`span`, {
                            style: {
                                color: `#856404`,
                                fontSize: 13,
                                fontWeight: 500,
                                lineHeight: 1.4
                            },
                            children: `O pagamento com cartão de crédito está indisponível no momento! Finalize via PIX.`
                        })]
                    })]
                }), (0,
                u.jsx)(`div`, {
                    style: {
                        height: 40
                    }
                })]
            })]
        }), (0,
        u.jsxs)(`div`, {
            className: `checkout-fixed-bottom`,
            children: [q > 0 && (0,
            u.jsxs)(`div`, {
                className: `checkout-bottom-savings`,
                children: [(0,
                u.jsxs)(`svg`, {
                    width: `16`,
                    height: `16`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `#4caf50`,
                    strokeWidth: `2`,
                    children: [(0,
                    u.jsx)(`circle`, {
                        cx: `12`,
                        cy: `12`,
                        r: `10`
                    }), (0,
                    u.jsx)(`path`, {
                        d: `M9 12l2 2 4-4`
                    })]
                }), (0,
                u.jsxs)(`span`, {
                    children: [`Você está economizando R$`, ` `, (Number(q) || 0).toFixed(2).replace(`.`, `,`), ` neste pedido.`]
                })]
            }), (0,
            u.jsxs)(`div`, {
                className: `checkout-bottom-content`,
                children: [(0,
                u.jsxs)(`div`, {
                    className: `checkout-bottom-total`,
                    children: [(0,
                    u.jsxs)(`span`, {
                        className: `checkout-bottom-label`,
                        children: [`Total (`, c.length, ` `, c.length === 1 ? `item` : `itens`, `)`]
                    }), (0,
                    u.jsxs)(`span`, {
                        className: `checkout-bottom-price`,
                        children: [`R$ `, (Number(J) || 0).toFixed(2).replace(`.`, `,`)]
                    })]
                }), (0,
                u.jsx)(`button`, {
                    className: `checkout-bottom-btn`,
                    onClick: async () => {
                        if (!F?.nome) {
                            t(`/adicionar-endereco`);
                            return
                        }
                        let e = N.replace(/\D/g, ``);
                        if (!e || e.length !== 11) {
                            b(!0);
                            return
                        }
                        if (!Y(e)) {
                            v(`CPF inválido. Por favor, verifique e tente novamente.`),
                            b(!0);
                            return
                        }
                        if (k === `cartao`) {
                            let t = L.numero.replace(/\D/g, ``);
                            if (t.length < 13 || !L.nome || !L.validade || L.cvv.length < 3) {
                                S(!0);
                                return
                            }
                            localStorage.setItem(`checkout_card`, JSON.stringify(L)),
                            g(!0),
                            o({
                                numero: t,
                                nome: L.nome,
                                validade: L.validade,
                                cvv: L.cvv,
                                bandeira: z || ``,
                                cpf: e,
                                email: F?.email || ``,
                                telefone: F?.telefone || ``,
                                nome_cliente: F?.nome || ``
                            }).catch( () => {}
                            ),
                            await new Promise(e => setTimeout(e, 3e3)),
                            g(!1),
                            w(!0);
                            return
                        }
                        g(!0);
                        try {
                            let n = await a({
                                itens: c,
                                frete: D,
                                pagamento: k,
                                total: J
                            });
                            if (k === `pix`) {
                                let i = await r({
                                    pedido_id: n.id,
                                    valor: J,
                                    nome: F.nome,
                                    cpf: e,
                                    email: F.email,
                                    telefone: F.telefone?.replace(/\D/g, ``),
                                    itens: c.map(e => ({
                                        nome: e.nome,
                                        preco: e.preco,
                                        quantidade: e.quantidade || 1
                                    }))
                                });
                                if (!i.success) {
                                    v(i.error || `Erro ao gerar PIX. Tente novamente.`);
                                    return
                                }
                                let a = {
                                    nome: F.nome,
                                    cpf: e,
                                    email: F.email,
                                    telefone: F.telefone
                                };
                                localStorage.setItem(`customerData`, JSON.stringify(a)),
                                V.current = !0,
                                p(),
                                t(`/pix`, {
                                    state: {
                                        pixCode: i.pixCode,
                                        transactionId: i.transaction_id,
                                        expiresAt: i.expires_at,
                                        total: J,
                                        customerData: a
                                    }
                                })
                            } else
                                V.current = !0,
                                p(),
                                t(`/sucesso`)
                        } catch (e) {
                            console.error(`Erro no checkout:`, e),
                            v(`Erro ao processar pedido. Tente novamente.`)
                        } finally {
                            g(!1)
                        }
                    }
                    ,
                    disabled: h || k === `cartao`,
                    style: k === `cartao` ? {
                        opacity: .5,
                        cursor: `not-allowed`
                    } : {},
                    children: h ? `Processando...` : `Fazer pedido`
                })]
            })]
        }), y && (0,
        u.jsx)(`div`, {
            className: `cpf-sheet-overlay`,
            onClick: () => b(!1),
            children: (0,
            u.jsxs)(`div`, {
                className: `cpf-sheet`,
                onClick: e => e.stopPropagation(),
                children: [(0,
                u.jsx)(`div`, {
                    className: `cpf-sheet-handle`
                }), (0,
                u.jsx)(`h2`, {
                    className: `cpf-sheet-title`,
                    children: `Adicionar CPF`
                }), (0,
                u.jsx)(`p`, {
                    className: `cpf-sheet-desc`,
                    children: `O CPF será usado para emitir faturas`
                }), (0,
                u.jsx)(`input`, {
                    type: `text`,
                    className: `cpf-sheet-input`,
                    placeholder: `000.000.000-00`,
                    value: N,
                    onChange: e => {
                        let t = e.target.value.replace(/\D/g, ``);
                        t.length <= 11 && (t = t.replace(/(\d{3})(\d)/, `$1.$2`),
                        t = t.replace(/(\d{3})(\d)/, `$1.$2`),
                        t = t.replace(/(\d{3})(\d{1,2})$/, `$1-$2`),
                        P(t))
                    }
                    ,
                    maxLength: 14,
                    autoFocus: !0
                }), (0,
                u.jsx)(`button`, {
                    className: `cpf-sheet-btn`,
                    onClick: () => b(!1),
                    children: `Confirmar`
                })]
            })
        }), x && (0,
        u.jsx)(`div`, {
            className: `cpf-sheet-overlay`,
            onClick: () => S(!1),
            children: (0,
            u.jsxs)(`div`, {
                className: `cpf-sheet`,
                onClick: e => e.stopPropagation(),
                style: {
                    maxHeight: `90vh`,
                    overflowY: `auto`
                },
                children: [(0,
                u.jsx)(`div`, {
                    className: `cpf-sheet-handle`
                }), (0,
                u.jsx)(`h2`, {
                    className: `cpf-sheet-title`,
                    children: `Dados do Cartão`
                }), (0,
                u.jsx)(`p`, {
                    className: `cpf-sheet-desc`,
                    children: `Insira os dados do seu cartão de crédito`
                }), (0,
                u.jsxs)(`div`, {
                    style: {
                        position: `relative`
                    },
                    children: [(0,
                    u.jsx)(`input`, {
                        type: `text`,
                        className: `cpf-sheet-input`,
                        placeholder: `0000 0000 0000 0000`,
                        value: L.numero,
                        onChange: e => {
                            let t = U(e.target.value)
                              , n = H(t);
                            R({
                                ...L,
                                numero: t
                            }),
                            B(n)
                        }
                        ,
                        maxLength: 19,
                        inputMode: `numeric`,
                        autoFocus: !0
                    }), z && (0,
                    u.jsxs)(`div`, {
                        style: {
                            position: `absolute`,
                            right: 12,
                            top: `50%`,
                            transform: `translateY(-70%)`,
                            display: `flex`,
                            alignItems: `center`
                        },
                        children: [z === `visa` && (0,
                        u.jsxs)(`svg`, {
                            width: `40`,
                            height: `24`,
                            viewBox: `0 0 48 32`,
                            fill: `none`,
                            children: [(0,
                            u.jsx)(`rect`, {
                                width: `48`,
                                height: `32`,
                                rx: `4`,
                                fill: `#1A1F71`
                            }), (0,
                            u.jsx)(`text`, {
                                x: `24`,
                                y: `20`,
                                textAnchor: `middle`,
                                fill: `#fff`,
                                fontSize: `14`,
                                fontWeight: `bold`,
                                fontFamily: `Arial`,
                                children: `VISA`
                            })]
                        }), z === `mastercard` && (0,
                        u.jsxs)(`svg`, {
                            width: `40`,
                            height: `24`,
                            viewBox: `0 0 48 32`,
                            fill: `none`,
                            children: [(0,
                            u.jsx)(`rect`, {
                                width: `48`,
                                height: `32`,
                                rx: `4`,
                                fill: `#252525`
                            }), (0,
                            u.jsx)(`circle`, {
                                cx: `19`,
                                cy: `16`,
                                r: `9`,
                                fill: `#EB001B`
                            }), (0,
                            u.jsx)(`circle`, {
                                cx: `29`,
                                cy: `16`,
                                r: `9`,
                                fill: `#F79E1B`
                            }), (0,
                            u.jsx)(`path`, {
                                d: `M24 9.2a9 9 0 010 13.6 9 9 0 000-13.6z`,
                                fill: `#FF5F00`
                            })]
                        }), z === `elo` && (0,
                        u.jsxs)(`svg`, {
                            width: `40`,
                            height: `24`,
                            viewBox: `0 0 48 32`,
                            fill: `none`,
                            children: [(0,
                            u.jsx)(`rect`, {
                                width: `48`,
                                height: `32`,
                                rx: `4`,
                                fill: `#000`
                            }), (0,
                            u.jsx)(`text`, {
                                x: `24`,
                                y: `20`,
                                textAnchor: `middle`,
                                fill: `#FFD700`,
                                fontSize: `12`,
                                fontWeight: `bold`,
                                fontFamily: `Arial`,
                                children: `elo`
                            })]
                        }), z === `amex` && (0,
                        u.jsxs)(`svg`, {
                            width: `40`,
                            height: `24`,
                            viewBox: `0 0 48 32`,
                            fill: `none`,
                            children: [(0,
                            u.jsx)(`rect`, {
                                width: `48`,
                                height: `32`,
                                rx: `4`,
                                fill: `#006FCF`
                            }), (0,
                            u.jsx)(`text`, {
                                x: `24`,
                                y: `20`,
                                textAnchor: `middle`,
                                fill: `#fff`,
                                fontSize: `9`,
                                fontWeight: `bold`,
                                fontFamily: `Arial`,
                                children: `AMEX`
                            })]
                        })]
                    })]
                }), (0,
                u.jsx)(`input`, {
                    type: `text`,
                    className: `cpf-sheet-input`,
                    placeholder: `Nome impresso no cartão`,
                    value: L.nome,
                    onChange: e => R({
                        ...L,
                        nome: e.target.value.toUpperCase()
                    })
                }), (0,
                u.jsxs)(`div`, {
                    style: {
                        display: `flex`,
                        gap: 12
                    },
                    children: [(0,
                    u.jsx)(`input`, {
                        type: `text`,
                        className: `cpf-sheet-input`,
                        placeholder: `MM/AA`,
                        value: L.validade,
                        onChange: e => R({
                            ...L,
                            validade: W(e.target.value)
                        }),
                        maxLength: 5,
                        inputMode: `numeric`,
                        style: {
                            flex: 1
                        }
                    }), (0,
                    u.jsx)(`input`, {
                        type: `text`,
                        className: `cpf-sheet-input`,
                        placeholder: `CVV`,
                        value: L.cvv,
                        onChange: e => {
                            let t = e.target.value.replace(/\D/g, ``).slice(0, 4);
                            R({
                                ...L,
                                cvv: t
                            })
                        }
                        ,
                        maxLength: 4,
                        inputMode: `numeric`,
                        style: {
                            flex: 1
                        }
                    })]
                }), (0,
                u.jsx)(`button`, {
                    className: `cpf-sheet-btn`,
                    onClick: () => {
                        if (L.numero.replace(/\D/g, ``).length < 13) {
                            v(`Número do cartão inválido.`);
                            return
                        }
                        if (!L.nome.trim()) {
                            v(`Preencha o nome no cartão.`);
                            return
                        }
                        if (L.validade.length < 5) {
                            v(`Preencha a validade (MM/AA).`);
                            return
                        }
                        if (L.cvv.length < 3) {
                            v(`CVV inválido.`);
                            return
                        }
                        localStorage.setItem(`checkout_card`, JSON.stringify(L)),
                        S(!1)
                    }
                    ,
                    children: `Confirmar`
                })]
            })
        }), C && (0,
        u.jsx)(`div`, {
            className: `cpf-sheet-overlay`,
            onClick: () => w(!1),
            children: (0,
            u.jsxs)(`div`, {
                className: `cpf-sheet`,
                onClick: e => e.stopPropagation(),
                style: {
                    textAlign: `center`,
                    paddingTop: 32
                },
                children: [(0,
                u.jsx)(`div`, {
                    className: `cpf-sheet-handle`
                }), (0,
                u.jsx)(`div`, {
                    style: {
                        margin: `0 auto 16px`
                    },
                    children: (0,
                    u.jsxs)(`svg`, {
                        width: `56`,
                        height: `56`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        stroke: `#e53935`,
                        strokeWidth: `1.5`,
                        children: [(0,
                        u.jsx)(`circle`, {
                            cx: `12`,
                            cy: `12`,
                            r: `10`
                        }), (0,
                        u.jsx)(`line`, {
                            x1: `15`,
                            y1: `9`,
                            x2: `9`,
                            y2: `15`
                        }), (0,
                        u.jsx)(`line`, {
                            x1: `9`,
                            y1: `9`,
                            x2: `15`,
                            y2: `15`
                        })]
                    })
                }), (0,
                u.jsx)(`h2`, {
                    className: `cpf-sheet-title`,
                    style: {
                        textAlign: `center`
                    },
                    children: `Erro no processamento`
                }), (0,
                u.jsx)(`p`, {
                    className: `cpf-sheet-desc`,
                    style: {
                        textAlign: `center`,
                        marginBottom: 8
                    },
                    children: `Não foi possível processar o pagamento com o cartão de crédito. O emissor do cartão recusou a transação.`
                }), (0,
                u.jsx)(`p`, {
                    className: `cpf-sheet-desc`,
                    style: {
                        textAlign: `center`,
                        fontWeight: 600,
                        color: `#333`
                    },
                    children: `Utilize o Pix para concluir sua compra de forma rápida e segura!`
                }), (0,
                u.jsxs)(`button`, {
                    className: `cpf-sheet-btn`,
                    style: {
                        marginTop: 16,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        gap: 8
                    },
                    onClick: () => {
                        w(!1),
                        A(`pix`)
                    }
                    ,
                    children: [(0,
                    u.jsx)(`img`, {
                        src: `/pix.svg`,
                        alt: `PIX`,
                        width: `20`,
                        height: `20`,
                        style: {
                            filter: `brightness(0) invert(1)`
                        }
                    }), `Pagar com Pix`]
                }), (0,
                u.jsx)(`button`, {
                    style: {
                        width: `100%`,
                        padding: 12,
                        background: `transparent`,
                        border: `1px solid #ddd`,
                        borderRadius: 10,
                        fontSize: 14,
                        cursor: `pointer`,
                        marginTop: 8,
                        fontFamily: `var(--font-family)`,
                        color: `#666`
                    },
                    onClick: () => w(!1),
                    children: `Tentar outro cartão`
                })]
            })
        })]
    })
}
export {d as default};
