#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct SSBO
{
    float4 v;
};

struct main0_out
{
    float4 FragColor [[color(0)]];
};

fragment main0_out main0(const device SSBO& _13 [[buffer(0)]])
{
    main0_out out = {};
    float4 _24 = _13.v;
    out.FragColor = _24 + _24;
    return out;
}

