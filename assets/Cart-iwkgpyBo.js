import {_ as e, d as t, f as n, g as r, h as i, l as a, m as o, o as s, u as c, x as l} from "./index-CRH4LhSi.js";
var u = l()
  , d = t();
function f() {
    let t = a()
      , {items: l, addItem: f, removeItem: p, updateQuantity: m, toggleItem: h, toggleAll: g, removeSelected: _, totalPrice: v, totalItems: y, selectedItems: b} = c()
      , [x,S] = (0,
    u.useState)([]);
    (0,
    u.useEffect)( () => {
        s().then(e => {
            if (Array.isArray(e)) {
                let t = new Set(l.map(e => e.id));
                S(e.filter(e => !t.has(e.id)).sort( () => .5 - Math.random()).slice(0, 6))
            }
        }
        )
    }
    , []),
    l.length > 0 && l.every(e => e.selecionado),
    o(v);
    let C = isNaN(y) ? l.length : y;
    return (0,
    d.jsxs)(`div`, {
        className: `container`,
        children: [(0,
        d.jsxs)(`div`, {
            className: `cart-header`,
            children: [(0,
            d.jsx)(`button`, {
                className: `header-back-btn`,
                onClick: () => t(-1),
                children: (0,
                d.jsx)(`svg`, {
                    className: `header-icon-svg`,
                    viewBox: `0 0 24 24`,
                    children: (0,
                    d.jsx)(`polyline`, {
                        points: `15 18 9 12 15 6`
                    })
                })
            }), (0,
            d.jsxs)(`span`, {
                className: `cart-header-title`,
                children: [`Carrinho (`, C, `)`]
            }), (0,
            d.jsx)(`div`, {
                style: {
                    width: 32
                }
            })]
        }), (0,
        d.jsxs)(`div`, {
            className: `cart-content`,
            children: [l.length === 0 ? (0,
            d.jsxs)(`div`, {
                className: `cart-empty`,
                children: [(0,
                d.jsxs)(`svg`, {
                    width: `80`,
                    height: `80`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `var(--color-text-light)`,
                    strokeWidth: `1`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [(0,
                    d.jsx)(`circle`, {
                        cx: `9`,
                        cy: `21`,
                        r: `1`
                    }), (0,
                    d.jsx)(`circle`, {
                        cx: `20`,
                        cy: `21`,
                        r: `1`
                    }), (0,
                    d.jsx)(`path`, {
                        d: `M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6`
                    })]
                }), (0,
                d.jsx)(`p`, {
                    children: `Seu carrinho está vazio`
                }), (0,
                d.jsx)(e, {
                    to: `/`,
                    className: `cart-empty-link`,
                    children: `Continuar comprando`
                })]
            }) : (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsxs)(`div`, {
                    className: `cart-store-header`,
                    children: [(0,
                    d.jsxs)(`svg`, {
                        width: `18`,
                        height: `18`,
                        viewBox: `0 0 24 24`,
                        fill: `none`,
                        children: [(0,
                        d.jsx)(`circle`, {
                            cx: `12`,
                            cy: `12`,
                            r: `10`,
                            stroke: `#FF2B56`,
                            strokeWidth: `2`
                        }), (0,
                        d.jsx)(`path`, {
                            d: `M9 12l2 2 4-4`,
                            stroke: `#FF2B56`,
                            strokeWidth: `2`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`
                        })]
                    }), (0,
                    d.jsxs)(`span`, {
                        className: `cart-store-name`,
                        children: [`Garimpo Barato (`, l.length, `)`]
                    })]
                }), (0,
                d.jsx)(`div`, {
                    className: `cart-free-shipping-banner-wrapper`,
                    children: (0,
                    d.jsxs)(`div`, {
                        className: `cart-free-shipping-banner`,
                        children: [(0,
                        d.jsxs)(`svg`, {
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            children: [(0,
                            d.jsx)(`rect`, {
                                x: `1`,
                                y: `3`,
                                width: `15`,
                                height: `13`,
                                stroke: `#00bfa5`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                fill: `none`
                            }), (0,
                            d.jsx)(`polygon`, {
                                points: `16 8 20 8 23 11 23 16 16 16 16 8`,
                                stroke: `#00bfa5`,
                                strokeWidth: `2`,
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                fill: `none`
                            }), (0,
                            d.jsx)(`circle`, {
                                cx: `5.5`,
                                cy: `18.5`,
                                r: `2.5`,
                                stroke: `#00bfa5`,
                                strokeWidth: `2`,
                                fill: `none`
                            }), (0,
                            d.jsx)(`circle`, {
                                cx: `18.5`,
                                cy: `18.5`,
                                r: `2.5`,
                                stroke: `#00bfa5`,
                                strokeWidth: `2`,
                                fill: `none`
                            })]
                        }), (0,
                        d.jsx)(`span`, {
                            children: `Você ganhou frete grátis!`
                        })]
                    })
                }), (0,
                d.jsx)(`div`, {
                    className: `cart-items`,
                    children: l.map(e => {
                        let r = isNaN(e.quantidade) || !e.quantidade ? 1 : e.quantidade
                          , i = Number(e.preco) || 0
                          , a = Number(e.preco_antigo) || 0
                          , o = n(i, a);
                        return (0,
                        d.jsxs)(`div`, {
                            className: `cart-item`,
                            children: [(0,
                            d.jsxs)(`div`, {
                                className: `cart-item-left`,
                                children: [(0,
                                d.jsx)(`input`, {
                                    type: `checkbox`,
                                    className: `cart-checkbox`,
                                    checked: !!e.selecionado,
                                    onChange: () => h(e.key)
                                }), (0,
                                d.jsx)(`img`, {
                                    className: `cart-item-image`,
                                    src: e.imagem,
                                    alt: e.nome,
                                    onClick: () => t(`/produto/${e.id}`)
                                })]
                            }), (0,
                            d.jsxs)(`div`, {
                                className: `cart-item-info`,
                                children: [(0,
                                d.jsx)(`p`, {
                                    className: `cart-item-name`,
                                    onClick: () => t(`/produto/${e.id}`),
                                    children: e.nome
                                }), (0,
                                d.jsxs)(`div`, {
                                    className: `cart-item-price-section`,
                                    children: [(0,
                                    d.jsxs)(`div`, {
                                        className: `cart-item-prices`,
                                        children: [(0,
                                        d.jsxs)(`span`, {
                                            className: `cart-item-current-price`,
                                            children: [(0,
                                            d.jsx)(`span`, {
                                                className: `cart-item-currency`,
                                                children: `R$`
                                            }), ` `, i.toFixed(2).replace(`.`, `,`)]
                                        }), a > i && (0,
                                        d.jsxs)(d.Fragment, {
                                            children: [(0,
                                            d.jsxs)(`span`, {
                                                className: `cart-item-old-price`,
                                                children: [`R$ `, a.toFixed(2).replace(`.`, `,`)]
                                            }), o > 0 && (0,
                                            d.jsxs)(`span`, {
                                                className: `cart-item-discount`,
                                                children: [`-`, o, `%`]
                                            })]
                                        })]
                                    }), (0,
                                    d.jsxs)(`div`, {
                                        className: `cart-item-quantity`,
                                        children: [(0,
                                        d.jsx)(`button`, {
                                            className: `cart-qty-btn`,
                                            onClick: () => m(e.key, r - 1),
                                            children: `−`
                                        }), (0,
                                        d.jsx)(`span`, {
                                            className: `cart-qty-value`,
                                            children: r
                                        }), (0,
                                        d.jsx)(`button`, {
                                            className: `cart-qty-btn`,
                                            onClick: () => m(e.key, r + 1),
                                            children: `+`
                                        })]
                                    })]
                                })]
                            })]
                        }, e.key)
                    }
                    )
                }), (0,
                d.jsxs)(`div`, {
                    className: `cart-protection`,
                    children: [(0,
                    d.jsxs)(`div`, {
                        className: `cart-protection-title`,
                        children: [(0,
                        d.jsxs)(`svg`, {
                            width: `18`,
                            height: `18`,
                            viewBox: `0 0 48 48`,
                            xmlns: `http://www.w3.org/2000/svg`,
                            children: [(0,
                            d.jsx)(`path`, {
                                d: `M0 0h48v48H0z`,
                                fill: `none`
                            }), (0,
                            d.jsx)(`path`, {
                                d: `M24,44c0,0,20-4,20-34L24,4L4,10C4,42,24,44,24,44z M32.829,18L22,28.828L15.171,22L18,19.172l4,4l8-8L32.829,18z`,
                                fill: `#8B4513`
                            })]
                        }), (0,
                        d.jsx)(`span`, {
                            children: `Proteção do cliente`
                        })]
                    }), (0,
                    d.jsxs)(`div`, {
                        className: `cart-protection-grid`,
                        children: [(0,
                        d.jsxs)(`div`, {
                            className: `cart-protection-item`,
                            children: [(0,
                            d.jsx)(`svg`, {
                                width: `12`,
                                height: `12`,
                                viewBox: `0 0 16 16`,
                                children: (0,
                                d.jsx)(`path`, {
                                    fill: `#8B4513`,
                                    d: `M13.7071,4.29289 C14.0976,4.68342 14.0976,5.31658 13.7071,5.70711 L7.70711,11.7071 C7.31658,12.0976 6.68342,12.0976 6.29289,11.7071 L3.29289,8.70711 C2.90237,8.31658 2.90237,7.68342 3.29289,7.29289 C3.68342,6.90237 4.31658,6.90237 4.70711,7.29289 L7,9.58579 L12.2929,4.29289 C12.6834,3.90237 13.3166,3.90237 13.7071,4.29289 Z`
                                })
                            }), (0,
                            d.jsx)(`span`, {
                                children: `Devolução gratuita`
                            })]
                        }), (0,
                        d.jsxs)(`div`, {
                            className: `cart-protection-item`,
                            children: [(0,
                            d.jsx)(`svg`, {
                                width: `12`,
                                height: `12`,
                                viewBox: `0 0 16 16`,
                                children: (0,
                                d.jsx)(`path`, {
                                    fill: `#8B4513`,
                                    d: `M13.7071,4.29289 C14.0976,4.68342 14.0976,5.31658 13.7071,5.70711 L7.70711,11.7071 C7.31658,12.0976 6.68342,12.0976 6.29289,11.7071 L3.29289,8.70711 C2.90237,8.31658 2.90237,7.68342 3.29289,7.29289 C3.68342,6.90237 4.31658,6.90237 4.70711,7.29289 L7,9.58579 L12.2929,4.29289 C12.6834,3.90237 13.3166,3.90237 13.7071,4.29289 Z`
                                })
                            }), (0,
                            d.jsx)(`span`, {
                                children: `Reembolso automático por danos`
                            })]
                        }), (0,
                        d.jsxs)(`div`, {
                            className: `cart-protection-item`,
                            children: [(0,
                            d.jsx)(`svg`, {
                                width: `12`,
                                height: `12`,
                                viewBox: `0 0 16 16`,
                                children: (0,
                                d.jsx)(`path`, {
                                    fill: `#8B4513`,
                                    d: `M13.7071,4.29289 C14.0976,4.68342 14.0976,5.31658 13.7071,5.70711 L7.70711,11.7071 C7.31658,12.0976 6.68342,12.0976 6.29289,11.7071 L3.29289,8.70711 C2.90237,8.31658 2.90237,7.68342 3.29289,7.29289 C3.68342,6.90237 4.31658,6.90237 4.70711,7.29289 L7,9.58579 L12.2929,4.29289 C12.6834,3.90237 13.3166,3.90237 13.7071,4.29289 Z`
                                })
                            }), (0,
                            d.jsx)(`span`, {
                                children: `Pagamento seguro`
                            })]
                        }), (0,
                        d.jsxs)(`div`, {
                            className: `cart-protection-item`,
                            children: [(0,
                            d.jsx)(`svg`, {
                                width: `12`,
                                height: `12`,
                                viewBox: `0 0 16 16`,
                                children: (0,
                                d.jsx)(`path`, {
                                    fill: `#8B4513`,
                                    d: `M13.7071,4.29289 C14.0976,4.68342 14.0976,5.31658 13.7071,5.70711 L7.70711,11.7071 C7.31658,12.0976 6.68342,12.0976 6.29289,11.7071 L3.29289,8.70711 C2.90237,8.31658 2.90237,7.68342 3.29289,7.29289 C3.68342,6.90237 4.31658,6.90237 4.70711,7.29289 L7,9.58579 L12.2929,4.29289 C12.6834,3.90237 13.3166,3.90237 13.7071,4.29289 Z`
                                })
                            }), (0,
                            d.jsx)(`span`, {
                                children: `Cupom por atraso na coleta`
                            })]
                        })]
                    })]
                })]
            }), x.length > 0 && (0,
            d.jsxs)(`div`, {
                className: `cart-recommended`,
                children: [(0,
                d.jsx)(`h3`, {
                    className: `cart-recommended-title`,
                    children: `Você também pode gostar`
                }), (0,
                d.jsx)(`div`, {
                    className: `cart-recommended-list`,
                    children: x.map(e => {
                        let a = r(e.imagem)
                          , o = n(e.preco, e.preco_antigo)
                          , s = Number(e.preco) || 0
                          , c = Number(e.preco_antigo) || 0;
                        return (0,
                        d.jsxs)(`div`, {
                            className: `cart-rec-item`,
                            children: [(0,
                            d.jsx)(`img`, {
                                className: `cart-rec-image`,
                                src: a,
                                alt: e.nome,
                                onClick: () => t(`/produto/${e.id}`)
                            }), (0,
                            d.jsxs)(`div`, {
                                className: `cart-rec-info`,
                                children: [(0,
                                d.jsx)(`p`, {
                                    className: `cart-rec-name`,
                                    onClick: () => t(`/produto/${e.id}`),
                                    children: e.nome
                                }), (0,
                                d.jsxs)(`div`, {
                                    className: `cart-rec-badges`,
                                    children: [o > 0 && (0,
                                    d.jsxs)(`span`, {
                                        className: `cart-rec-discount-badge`,
                                        children: [(0,
                                        d.jsx)(`svg`, {
                                            viewBox: `0 0 10 10`,
                                            width: `8`,
                                            height: `8`,
                                            children: (0,
                                            d.jsx)(`path`, {
                                                d: `M5 0L6.12 3.8H10L6.88 6.18L8 10L5 7.64L2 10L3.12 6.18L0 3.8H3.88L5 0Z`,
                                                fill: `currentColor`
                                            })
                                        }), o, `% OFF`]
                                    }), e.frete_gratis === 1 && (0,
                                    d.jsx)(`span`, {
                                        className: `cart-rec-frete-badge`,
                                        children: `Frete grátis`
                                    })]
                                }), e.vendidos > 0 && (0,
                                d.jsxs)(`span`, {
                                    className: `cart-rec-sold`,
                                    children: [i(e.vendidos), ` vendido(s)`]
                                }), (0,
                                d.jsxs)(`div`, {
                                    className: `cart-rec-price-row`,
                                    children: [(0,
                                    d.jsxs)(`div`, {
                                        className: `cart-rec-prices`,
                                        children: [(0,
                                        d.jsxs)(`span`, {
                                            className: `cart-rec-current-price`,
                                            children: [(0,
                                            d.jsx)(`span`, {
                                                className: `cart-rec-currency`,
                                                children: `R$`
                                            }), ` `, s.toFixed(2).replace(`.`, `,`)]
                                        }), c > s && (0,
                                        d.jsxs)(`span`, {
                                            className: `cart-rec-old-price`,
                                            children: [`R$ `, c.toFixed(2).replace(`.`, `,`)]
                                        })]
                                    }), (0,
                                    d.jsxs)(`button`, {
                                        className: `cart-rec-buy-btn`,
                                        onClick: () => {
                                            f(e),
                                            t(`/produto/${e.id}`)
                                        }
                                        ,
                                        children: [(0,
                                        d.jsxs)(`svg`, {
                                            width: `16`,
                                            height: `16`,
                                            viewBox: `0 0 24 24`,
                                            fill: `none`,
                                            stroke: `#ff2b56`,
                                            strokeWidth: `2`,
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            children: [(0,
                                            d.jsx)(`circle`, {
                                                cx: `9`,
                                                cy: `21`,
                                                r: `1`
                                            }), (0,
                                            d.jsx)(`circle`, {
                                                cx: `20`,
                                                cy: `21`,
                                                r: `1`
                                            }), (0,
                                            d.jsx)(`path`, {
                                                d: `M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6`
                                            })]
                                        }), `Comprar`]
                                    })]
                                })]
                            })]
                        }, e.id)
                    }
                    )
                })]
            })]
        }), l.length > 0 && (0,
        d.jsxs)(`div`, {
            className: `cart-footer`,
            children: [(0,
            d.jsxs)(`div`, {
                className: `cart-footer-total`,
                children: [(0,
                d.jsxs)(`span`, {
                    className: `cart-footer-label`,
                    children: [`Total (`, b.length, ` item):`]
                }), (0,
                d.jsxs)(`span`, {
                    className: `cart-footer-price`,
                    children: [`R$`, ` `, (isNaN(v) ? 0 : v).toFixed(2).replace(`.`, `,`)]
                })]
            }), (0,
            d.jsxs)(`button`, {
                className: `cart-checkout-btn`,
                disabled: b.length === 0,
                onClick: () => t(`/checkout`),
                children: [`Finalizar Compra (`, b.length, `)`]
            })]
        })]
    })
}
export {f as default};
